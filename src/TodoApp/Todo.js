import React, { Fragment } from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import toggleHook from '../customHook/useToggleState';
import EditTodoForm from './EditTodoForm';
const Todo = ({ id, name: task, completed, removeTodo, toggleTodo, updateTodo }) => {
  const [isEditing, toggle] = toggleHook();
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          name={task}
          updateTodo={updateTodo}
          toggle={toggle}
        />
      ) : (
        <Fragment>
          <Checkbox tabIndex={-1} checked={completed} onChange={() => toggleTodo(id)} />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Fragment>
      )}
    </ListItem>
  );
};

export default Todo;