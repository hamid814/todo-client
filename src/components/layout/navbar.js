import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { AuthContext } from '../../context/auth/AuthState';
import { TodoContext } from '../../context/todo/TodoState';

import './navbar.scss';

const Navbar = () => {
  const { isAuthenicated, laoding, logout } = useContext(AuthContext);
  const { clearData } = useContext(TodoContext);

  const onLogoutCLick = () => {
    logout();
    clearData();
  };

  return (
    <nav className="navbar">
      <div>Todo app</div>
      <div className="logo">
        <img src={Logo} alt="todo-fullsatck-logo" />
      </div>
      {isAuthenicated && !laoding ? (
        <span onClick={onLogoutCLick}>Logout</span>
      ) : (
        <span>
          <Link to={process.env.PUBLIC_URL + '/register'}>Register</Link>
          <Link to={process.env.PUBLIC_URL + '/login'}>Login</Link>
        </span>
      )}
    </nav>
  );
};

export default Navbar;
