import React, { createContext } from 'react';
import todoReducer from '../../reducers/todoReducer';
import useLocalStorageState from '../../customHook/useLocalStorageState';

const TodosContext = createContext();
const DispatchContext = createContext();
const defaultTodos = [];

const TodosProvider = ({ children }) => {
  const [todoList, dispatch] = useLocalStorageState('todos', defaultTodos, todoReducer);
  return (
    <TodosContext.Provider value={todoList}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
};
export { TodosContext, DispatchContext, TodosProvider };