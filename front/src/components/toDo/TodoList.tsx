import React from 'react';
import { toDoType } from '@/types/todo';
import ToDoItem from '@/components/toDo/ToDoItem';

interface Props {
  todoList: toDoType[];
}

const ToDoList: React.FC<Props> = (props: Props) => {
  const { todoList } = props;
  return (
    <>
      {todoList && todoList.map((value, index) => {
        return (<React.Fragment key={index}>
          <ToDoItem todo={value}/>
        </React.Fragment>)
      })}
    </>
  )
};

export default ToDoList;