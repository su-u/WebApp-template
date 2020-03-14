import { ToDoActions } from '@/actions';

export const addTodo = (name: string, description: string) => {
  return {
    type: ToDoActions.ADD_TODO,
    name,
    description,
  }
};

export const removeTodo = (key: number) => {
  return {
    type: ToDoActions.REMOVE_TODO,
    key,
  }
};