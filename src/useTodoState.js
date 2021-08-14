import { useState } from 'react';
import UUID from 'uuid';
const useTodoState = (initialValue) => {
  const [todoList, setTodoList] = useState(initialValue);
  // Add todo in list.
  const addTodo = (text) => {
    setTodoList([...todoList, { id: UUID(), name: text, completed: false }]);
  };
  // Remove todo from list.
  const removeTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  // Toggle todo checkbox
  const toggleTodo = (id) => {
    const newList = todoList.map((todo) => {
      if (todo.id === id) {
        return ({ ...todo, completed: !todo.completed });
      }
      return todo;
    });
    setTodoList(newList);
  };
  // Update todo
  const updateTodo = (id, newName) => {
    const newList = (todoList || []).map((todo) => {
      if (todo.id === id) {
        return ({ ...todo, name: newName });
      }
      return todo;
    });
    setTodoList(newList);
  }
  return {
    todoList,
    addTodo,
    removeTodo,
    toggleTodo,
    updateTodo,
  };
}

export default useTodoState;