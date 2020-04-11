import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from '../todos/AddTodo';
import Todos from '../todos/Todos';

import './home.scss';

const Home = () => {
  const [isAuthenicated, setIsAuthenicated] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getTodos();
    }

    // eslint-disable-next-line
  }, []);

  const getTodos = async () => {
    try {
      const res = await axios.get('/api/todos', {
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });

      setIsAuthenicated(true);

      setTodos(res.data.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const addTodo = async (todo) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    try {
      const res = await axios.post('/api/todos', todo, config);

      setTodos([...todos, res.data.data]);
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
