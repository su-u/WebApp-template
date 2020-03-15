import React from 'react';
import Button from '@material-ui/core/Button';
import * as TodoActions from '@/actions/todo';

interface Props {
  todoActions: typeof TodoActions;
}

const TodoAdd: React.FC<Props> = (props: Props) => {
  const { todoActions } = props;
  const addTodo = () => {
    todoActions.addTodo('test', 'test');
  };

  return (
    <>
      <Button onClick={addTodo}>追加</Button>
    </>
  );
};

export default TodoAdd;
