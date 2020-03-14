import { Map } from 'immutable';
import { ToDoActions } from '@/actions';

const initState = Map();

// eslint-disable-next-line no-unused-vars
const todo = (state: any = initState, action: any) => {
  switch (action.type) {
    case ToDoActions.ADD_TODO:
      if(state.get('todoList') !== null && state.get('todoList').length === 0){
        const todoList = [{
          key: 0,
          name: action.name,
          description: action.description,
        }];
        return state.set('todoList', todoList);
      } else {
        const todo = [{
          key: state.get('todoList').length,
          name: action.name,
          description: action.description,
        }];
        return state.set('todoList', state.get('todoList').concat(todo));
      }
      break;
    case ToDoActions.REMOVE_TODO:
      break;
    default:
      break;
  }
  return state;
};

export default todo;
