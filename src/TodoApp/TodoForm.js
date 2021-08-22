import React, { useContext } from 'react';
import { TextField, Paper } from '@material-ui/core';
import textInputHook from '../customHook/useInputState';
import { DispatchContext } from './contexts/TodoContext'

const TodoForm = () => {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = textInputHook();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', text: value });
    reset();
  };
  console.log('form rerender');
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