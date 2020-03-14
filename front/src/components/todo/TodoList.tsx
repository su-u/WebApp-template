import React from 'react';
import { todoType } from '@/types/todo';
import TodoItem from '@/components/todo/TodoItem';

interface Props {
  todoList: todoType[];
}

const TodoList: React.FC<Props> = (props: Props) => {
  const { todoList } = props;
  return (
    <div>
      {todoList &&
        todoList.map(value => <TodoItem key={value.key} todo={value} />)}
    </div>
  );
};

export default TodoList;
