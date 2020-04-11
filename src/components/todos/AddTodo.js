import React, { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../../context/todo/TodoState';

import './addtodo.scss';

const AddTodo = () => {
  const { addTodo, updateTodo, current, clearCurrent } = useContext(
    TodoContext
  );

  const [text, setText] = useState('');

  useEffect(() => {
    if (current) {
      setText(current.text);
    }
    // eslint-disable-next-line
  }, [current]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!current) {
      addTodo({
        text,
      });

      setText('');
    } else {
      await updateTodo(
        {
          text,
          done: current.done,
        },
        current._id
      );

      setText('');

      clearCurrent();
    }
  };

  const cancelEdit = () => {
    clearCurrent();
    setText('');
  };

  return (
    <div className="add-todo">
      <h1>Add Todo</h1>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="add todo here"
            value={text}
            name="text"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <input type="submit" value={current ? 'Update' : 'Add'} />
          {current && <button onClick={cancelEdit}>cancel</button>}
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
