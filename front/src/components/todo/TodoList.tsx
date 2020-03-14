import React from 'react';
import { todoType } from '@/types/todo';
import TodoItem from '@/components/todo/TodoItem';
import * as TodoActions from '@/actions/todo';

interface Props {
  todoList: todoType[];
  todoActions: typeof TodoActions;
}

const TodoList: React.FC<Props> = (props: Props) => {
  const { todoList, todoActions } = props;
  return (
    <div>
      {todoList &&
        todoList.map(value => (
          <TodoItem key={value.key} todo={value} todoActions={todoActions} />
        ))}
    </div>
  );
};

export default TodoList;
