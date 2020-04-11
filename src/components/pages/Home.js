import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { TodoContext } from '../../context/todo/TodoState';
import { AuthContext } from '../../context/auth/AuthState';
import AddTodo from '../todos/AddTodo';
import Todos from '../todos/Todos';

import './home.scss';

const Home = () => {
  const { getTodos, todos } = useContext(TodoContext);
  const { isAuthenicated, loadUser } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      loadUser();
    }

    // eslint-disable-next-line
  }, []);

  const addTodo = async (todo) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    try {
      const res = await axios.post('/api/todos', todo, config);

      console.log(res);
      // setTodos([...todos, res.data.data]);
    } catch (err) {}
  };

  if (isAuthenicated) {
    return (
      <div className="home">
        <Todos todos={todos} />
        <AddTodo addTodo={addTodo} />
      </div>
    );
  } else {
    return <>please login or register</>;
  }
};

export default Home;
