import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '@/actions/todo';
import { NavBar } from '@/components/header/NavBar';
import TodoList from '@/components/todo/TodoList';
import TodoAdd from '@/components/todo/TodoAdd';
import { todoType } from '@/types/todo';

interface Props {
  todoList: todoType[];
  todoActions: typeof TodoActions;
}

const TodoApp: React.FC<Props> = (props: Props) => {
  const { todoList, todoActions } = props;
  return (
    <>
      <NavBar title="ToDo" />
      <Container>
        <AddContainer>
          <TodoAdd todoActions={todoActions} />
        </AddContainer>
        <TodoList todoList={todoList} todoActions={todoActions} />
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AddContainer = styled.div`
  padding-top: 20px;
`;

const mapStateToProps = (state: any) => {
  return {
    todoList: state.todo.get('todoList'),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    todoActions: bindActionCreators(TodoActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
