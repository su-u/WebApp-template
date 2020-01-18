import { applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import Reducer from '../reducers';

const createFinalStore = () => {
  const thunkMiddleWare = Thunk;
  const middleware = applyMiddleware(thunkMiddleWare);
  // const isDevelopEnv = process.env.NODE_ENV === 'development';
  const store = createStore(Reducer, {}, middleware);
  return store;
};

export default createFinalStore;
