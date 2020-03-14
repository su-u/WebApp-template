import { combineReducers } from 'redux';
import app from './app';
import todo from '@/reducers/todo';

export default combineReducers({
  app,
  todo,
});
