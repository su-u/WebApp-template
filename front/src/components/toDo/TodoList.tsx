import React from 'react';
import { todoType } from '@/types/todo';
import TodoItem from '@/components/toDo/TodoItem';

interface Props {
  todoList: todoType[];
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