import React, { useContext } from 'react';
import { TodoContext } from '../../context/todo/TodoState';

const TodoItem = ({ todo }) => {
  const { deleteTodo, setCurrent, updateTodo } = useContext(TodoContext);

  const onDelete = () => {
    deleteTodo(todo._id);
  };

  const onEdit = () => {
    setCurrent(todo);
  };

  const toggleDone = () => {
    updateTodo(
      {
        done: !todo.done,
      },
      todo._id
    );
  };

  return (
    <div className={`todo-item ${todo.done && 'done'}`}>
      <span>{todo.text}</span>
      <span className="delete" onClick={onDelete}>
        X
      </span>
      <span className="edit" onClick={onEdit}>
        E
      </span>
      <span className="edit" onClick={toggleDone}>
        D
      </span>
    </div>
  );
};

export default TodoItem;
