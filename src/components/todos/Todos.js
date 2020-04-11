import React from 'react';
import TodoItem from './TodoItem';

import './todos.scss';

const todos = ({ todos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default todos;
