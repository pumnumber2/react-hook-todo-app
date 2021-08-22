import React, { Fragment, useContext } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';
import { TodosContext } from './contexts/TodoContext';
const TodoList = () => {
  const list = useContext(TodosContext);
  const taskListComponent = (list || []).map((item, i) => {
    return (
      <Fragment key={item.id}>
        <Todo
          key={item.id}
          {...item}
        />
        {i !== list.length - 1 && (
          <Divider />
        )}
      </Fragment>
    );
  });
  console.log('list rerender');
  return list.length ? (
    <Paper>
      <List>
        {taskListComponent}
      </List>
    </Paper>
  ) : null;
};

export default TodoList;