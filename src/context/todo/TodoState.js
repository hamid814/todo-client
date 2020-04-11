import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import TodoReducer from './TodoReducer';

const initialState = {
  todos: [],
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const getTodos = async () => {
    try {
      const res = await axios.get('/api/todos', {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });

      dispatch({
        type: 'get-todos',
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err.response);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`, {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });

      dispatch({
        type: 'delete-todo',
        payload: id,
      });
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const editTodo = (id) => {};

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        getTodos,
        deleteTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
