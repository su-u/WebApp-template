import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as ToDoActions from '@/actions/todo';
import ButtonAppBar from '@/components/header/NavBar';

const ToDoApp = () => {
  return (
    <>
      <ButtonAppBar title="ToDo" />
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
    todoActions: bindActionCreators(ToDoActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);

