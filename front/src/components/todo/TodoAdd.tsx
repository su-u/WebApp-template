import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as TodoActions from '@/actions/todo';

interface Props {
  todoActions: typeof TodoActions;
}

const TodoAdd: React.FC<Props> = (props: Props) => {
  const { todoActions } = props;

  const nameRef = React.createRef<any>(null);
  const descriptionRef = React.createRef<any>(null);

  const addTodo = () => {
    const nameValue = nameRef.current.value.trim();
    const descriptionValue = descriptionRef.current.value.trim();
    if (nameValue.length === 0 || descriptionValue.length === 0) return;

    todoActions.addTodo(nameValue, descriptionValue);
  };

  return (
    <Container>
      <TextField
        inputRef={nameRef}
        id="outlined-name"
        label="name"
        variant="outlined"
      />
      <TextField
        inputRef={descriptionRef}
        id="outlined-description"
        label="description"
        variant="outlined"
      />
      <AddButton onClick={addTodo}>追加</AddButton>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  height: 56px;
`;

const AddButton = styled(Button)`
  margin: 9.75px 0 9.75px 10px;
  background-color: #9e9e9e;
  :hover {
    background-color: #bdbdbd;
  }
`;

export default TodoAdd;
