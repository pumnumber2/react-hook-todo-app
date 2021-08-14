import React from 'react';
import { TextField, Paper } from '@material-ui/core';
import textInputHook from './useInputState';

const TodoForm = ({ addItem }) => {
  const [value, handleChange, reset] = textInputHook();

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(value);
    reset();
  };

  return (
    <Paper className="add-todo-form-container">
      <form onSubmit={onSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new task"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;