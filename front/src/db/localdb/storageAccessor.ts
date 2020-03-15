const StorageAccessor = {
  set: <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : null;
  },
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
};
export default StorageAccessor;

export const isFirstAccess = (): boolean => {
  const count = StorageAccessor.get<string>('AccessCount');
  if (count === null || parseInt(count, 10) < 1) {
    StorageAccessor.set('AccessCount', 1);
    return true;
  } else {
    StorageAccessor.set('AccessCount', parseInt(count, 10) + 1);
    return false;
  }
};

export const SelectedUserStorage = {
  get: (): string | null => {
    return StorageAccessor.get<string>('SelectedUser');
  },
  set: (key: number) => {
    StorageAccessor.set('SelectedUser', key);
  },
};

export const selectedTargetUserStorage = {
  get: (): string | null => {
    return StorageAccessor.get('SelectedTargetUser');
  },
  set: (key: number) => {
    StorageAccessor.set('SelectedTargetUser', key);
  },
};
