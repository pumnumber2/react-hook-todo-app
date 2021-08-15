import React from 'react';
import { Toolbar, Grid, Paper, AppBar, Typography } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import todoStateHook from '../customHook/useTodoState';

const TodoApp = (props) => {
  // Initialize customHook
  const {
    todoList,
    addTodo,
    removeTodo,
    toggleTodo,
    updateTodo,
  } = todoStateHook([]);

  return (
    <Paper className="root-paper-container">
      <AppBar position="static" color="primary" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">HOOK TODO</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" className="root-grid-container" >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addItem={addTodo} />
          <TodoList
            list={todoList}
            removeItem={removeTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;