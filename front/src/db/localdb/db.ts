import StorageAccessor from './storageAccessor';
import DBResponse from '@/db/localdb/dbResponse';
import DatabaseIndex from '@/db/localdb/databaseIndex';

const DB = {
  set: <T>(key: string, value: T, indexDBKey: string): DBResponse => {
    let IndexDB: DatabaseIndex | null = StorageAccessor.get<DatabaseIndex>(
      indexDBKey
    );
    if (IndexDB === null) {
      IndexDB = {};
      StorageAccessor.set(indexDBKey, {});
    }
    if (IndexDB[key]) return DBResponse.keyAlreadyExists;

    IndexDB[key] = true;
    StorageAccessor.set<DatabaseIndex>(indexDBKey, IndexDB);
    StorageAccessor.set<T>(key, value);
    return DBResponse.Success;
  },
  update: <T>(key: string, value: T, indexDBKey: string): DBResponse => {
    let IndexDB: DatabaseIndex | null = StorageAccessor.get<DatabaseIndex>(
      indexDBKey
    );
    if (IndexDB === null) {
      IndexDB = {};
      StorageAccessor.set<DatabaseIndex>(indexDBKey, {});
    }
    if (!IndexDB[key]) return DBResponse.KeyNotFound;

    IndexDB[key] = true;
    StorageAccessor.set<DatabaseIndex>(indexDBKey, IndexDB);
    StorageAccessor.set<T>(key, value);
    return DBResponse.Success;
  },
  get: <T>(
    key: string,
    indexDBKey: string
  ): { responseType: DBResponse; data: any } => {
    const IndexDB: DatabaseIndex | null = StorageAccessor.get<DatabaseIndex>(
      indexDBKey
    );
    if (IndexDB === null)
      return { responseType: DBResponse.KeyNotFound, data: null };
    else if (!IndexDB[key])
      return { responseType: DBResponse.KeyNotFound, data: null };

    return {
      responseType: DBResponse.Success,
      data: StorageAccessor.get<T>(key),
    };
  },
  remove: (key: string, indexDBKey: string): DBResponse => {
    const IndexDB: DatabaseIndex | null = StorageAccessor.get<DatabaseIndex>(
      indexDBKey
    );
    if (IndexDB === null) return DBResponse.KeyNotFound;
    else if (!IndexDB[key]) return DBResponse.KeyNotFound;

    IndexDB[key] = false;
    StorageAccessor.set<DatabaseIndex>(indexDBKey, IndexDB);
    StorageAccessor.remove(key);
    return DBResponse.Success;
  },
  getAllIndex: (indexDBKey: string): DatabaseIndex => {
    const indexDb = StorageAccessor.get<DatabaseIndex>(indexDBKey);
    if (indexDb === null) {
      StorageAccessor.set(indexDBKey, {});
      return {};
    } else {
      const items = StorageAccessor.get<DatabaseIndex>(indexDBKey);
      return items !== null ? items : {};
    }
  },
};

export default DB;