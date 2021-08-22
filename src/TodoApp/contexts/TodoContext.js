import React, { createContext, useReducer } from 'react';
import todoReducer from '../../reducers/todoReducer';
// import useTodoState from '../../customHook/useTodoState';

const TodosContext = createContext();
const DispatchContext = createContext();
const defaultTodos = [];

const TodosProvider = ({ children }) => {
  // const todoStuff = useTodoState(defaultTodos);
  const [todoList, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todoList}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
};
export { TodosContext, DispatchContext, TodosProvider };