import React, { useEffect } from 'react';
import { Toolbar, Grid, Paper, AppBar, Typography } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import todoStateHook from './useTodoState';
const TodoApp = (props) => {
  const initialList = JSON.parse(window.localStorage.getItem('todos') || "[]");
  // Initialize customHook
  const {
    todoList,
    addTodo,
    removeTodo,
    toggleTodo,
    updateTodo,
  } = todoStateHook(initialList);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Paper className="root-paper-container">
      <AppBar position="static" color="primary" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">HOOK TODO</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" className="root-grid-container" >
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