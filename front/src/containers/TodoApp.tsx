import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '@/actions/todo';
import ButtonAppBar from '@/components/header/NavBar';
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
      <ButtonAppBar title="ToDo" />
      <TodoAdd todoActions={todoActions} />
      <TodoList todoList={todoList} />
    </>
  );
};

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
