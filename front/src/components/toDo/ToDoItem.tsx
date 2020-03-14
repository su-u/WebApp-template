import React from 'react';
import { toDoType } from '@/types/todo';

interface Props {
  todo: toDoType;
}

const ToDoItem: React.FC<Props> = (props: Props) => {
  const { name, description } = props.todo;
  return (
    <>
      {name}
      ,
      {description}
    </>
  )
};

export default ToDoItem;