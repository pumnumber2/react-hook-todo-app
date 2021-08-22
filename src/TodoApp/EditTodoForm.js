import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import textInputHook from '../customHook/useInputState';
import { DispatchContext } from './contexts/TodoContext';
const EditTodoForm = ({ name, toggle, id }) => {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = textInputHook(name);
  const submitNewName = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE', id, name: value });
    reset();
    toggle();
  };
  return (
    <form
      onSubmit={submitNewName}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm