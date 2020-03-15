import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import * as TodoActions from '@/actions/todo';
import { todoType } from '@/types/todo';

interface Props {
  key: number;
  todo: todoType;
  todoActions: typeof TodoActions;
}

const TodoItem: React.FC<Props> = (props: Props) => {
  const { todo, todoActions } = props;
  const { name, description, key } = todo;

  const remove = () => {
    todoActions.removeTodo(key);
  };

  return (
    <div>
      {name},{description}
      <RemoveButton onClick={remove}>削除</RemoveButton>
    </div>
  );
};

const RemoveButton = styled(Button)`
  background-color: indianred;
  :hover {
    background-color: red;
  }
`;

export default TodoItem;
