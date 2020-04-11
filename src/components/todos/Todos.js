import React from 'react';
import TodoItem from './TodoItem';

const todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default todos;
