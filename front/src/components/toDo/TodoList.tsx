import React from 'react';
import { toDoType } from '@/types/todo';
import TodoItem from '@/components/toDo/TodoItem';

interface Props {
  todoList: toDoType[];
}

const ToDoList: React.FC<Props> = (props: Props) => {
  const { todoList } = props;
  return (
    <>
      {todoList && todoList.map((value, index) => {
        return (<React.Fragment key={index}>
          <TodoItem todo={value}/>
        </React.Fragment>)
      })}
    </>
  )
};

export default ToDoList;