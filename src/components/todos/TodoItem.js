import React, { useContext } from 'react';
import { TodoContext } from '../../context/todo/TodoState';

const TodoItem = ({ todo }) => {
  const { deleteTodo, setCurrent } = useContext(TodoContext);

  const onDelete = () => {
    deleteTodo(todo._id);
  };

  const onEdit = () => {
    setCurrent(todo);
  };

  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <span className="delete" onClick={onDelete}>
        X
      </span>
      <span className="edit" onClick={onEdit}>
        E
      </span>
    </div>
  );
};

export default TodoItem;
