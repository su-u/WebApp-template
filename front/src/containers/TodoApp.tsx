import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '@/actions/todo';
import ButtonAppBar from '@/components/header/NavBar';
import ToDoList from '@/components/toDo/TodoList';
import { todoType } from '@/types/todo';

interface Props {
  todoList: todoType[];
  todoActions: typeof TodoActions;
}

const TodoApp: React.FC<Props> = (props: Props) => {
  const { todoList } = props;
  return (
    <>
      <ButtonAppBar title="ToDo" />
      <ToDoList todoList={todoList}/>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    todoList: state.app.get('todoList'),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    todoActions: bindActionCreators(TodoActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

