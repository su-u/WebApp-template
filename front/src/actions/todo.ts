import { TodoActions } from '@/actions';

export const addTodo = (name: string, description: string) => {
  return {
    type: TodoActions.ADD_TODO,
    name,
    description,
  };
};

export const removeTodo = (key: number) => {
  return {
    type: TodoActions.REMOVE_TODO,
    key,
  };
};
