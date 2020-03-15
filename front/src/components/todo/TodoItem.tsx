import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
    <>
      <Grid item xs={9}>
        <ItemContainer>
          <p>name : {name}</p>
          <p>description: {description}</p>
        </ItemContainer>
      </Grid>
      <Grid item xs={3}>
        <RemoveButton onClick={remove}>削除</RemoveButton>
      </Grid>
    </>
  );
};

const ItemContainer = styled(Paper)`
  padding: 10px;
  text-align: left;
`;

const RemoveButton = styled(Button)`
  background-color: indianred;
  :hover {
    background-color: red;
  }
`;

export default TodoItem;
