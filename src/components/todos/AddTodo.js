import React, { useState } from 'react';

import './addtodo.scss';

const AddTodo = ({ addTodo }) => {
  const [values, setValues] = useState({
    text: '',
    done: false,
  });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    addTodo(values);

    setValues({
      text: '',
      done: false,
    });
  };

  return (
    <div className="add-todo">
      <h1>Add Todo</h1>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={values.text}
            name="text"
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <input type="submit" value="Add todo" />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
