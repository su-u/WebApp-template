import React from 'react';
import { todoType } from '@/types/todo';

interface Props {
  todo: todoType;
}

const TodoItem: React.FC<Props> = (props: Props) => {
  const { name, description } = props.todo;
  return (
    <div>
      {name},{description}
    </div>
  );
};

export default TodoItem;
