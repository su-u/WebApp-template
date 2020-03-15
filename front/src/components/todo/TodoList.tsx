import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
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
    <Container>
      <Grid container spacing={3}>
        {todoList &&
          todoList.map(value => (
            <TodoItem key={value.key} todo={value} todoActions={todoActions} />
          ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default TodoList;
