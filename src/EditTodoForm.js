import React from 'react';
import { TextField } from '@material-ui/core';
import textInputHook from './useInputState';
const EditTodoForm = ({ name, updateTodo, toggle, id }) => {
  const [value, handleChange, reset] = textInputHook(name);
  const submitNewName = (e) => {
    e.preventDefault();
    updateTodo(id, value);
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