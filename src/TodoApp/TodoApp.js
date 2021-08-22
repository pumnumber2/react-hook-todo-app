import React from 'react';
import { Toolbar, Grid, Paper, AppBar, Typography } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './contexts/TodoContext'

const TodoApp = (props) => {
  return (
    <Paper className="root-paper-container">
      <AppBar position="static" color="primary" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">HOOK TODO</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" className="root-grid-container" >
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;