import React, { useEffect, useContext } from 'react';
import { TodoContext } from '../../context/todo/TodoState';
import { AuthContext } from '../../context/auth/AuthState';
import AddTodo from '../todos/AddTodo';
import Todos from '../todos/Todos';

import './home.scss';

const Home = () => {
  const { getTodos, todos } = useContext(TodoContext);
  const { isAuthenicated, loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUserAndGetTodos();

    // eslint-disable-next-line
  }, []);

  const loadUserAndGetTodos = async () => {
    await loadUser();
    await getTodos();
  };

  if (isAuthenicated) {
    return (
      <div className="home">
        <Todos todos={todos} />
        <AddTodo />
      </div>
    );
  } else {
    return <>please login or register</>;
  }
};

export default Home;
