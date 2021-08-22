import UUID from 'uuid';

const todoReducer = (todoList, { type, ...action }) => {
  switch (type) {
    case 'ADD':
      return [...todoList, { id: UUID(), name: action.text, completed: false }];
    case 'REMOVE':
      return todoList.filter((item) => item.id !== action.id);
    case 'TOGGLE':
      return todoList.map((item) => item.id === action.id ? { ...item, completed: !item.completed } : item);
    case 'UPDATE':
      return todoList.map((item) => item.id === action.id ? { ...item, name: action.name } : item)
    default:
      return todoList;
  }
};

export default todoReducer;