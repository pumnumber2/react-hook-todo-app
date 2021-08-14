import React, { Fragment } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';
; const TodoList = ({ list, removeItem, toggleTodo, updateTodo }) => {
  const taskListComponent = (list || []).map((item, i) => {
    return (
      <Fragment>
        <Todo
          {...item}
          key={item.id}
          removeTodo={removeItem}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
        />
        {i !== list.length - 1 && (
          <Divider />
        )}
      </Fragment>
    );
  });
  return list.length ? (
    <Paper>
      <List>
        {taskListComponent}
      </List>
    </Paper>
  ) : null;
};

export default TodoList;