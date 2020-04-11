import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthState';

import './login.scss';

const Login = (props) => {
  const { isAuthenicated, login } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenicated) {
      props.history.push(process.env.PUBLIC_URL + '/');
    }
    // eslint-disable-next-line
  }, [isAuthenicated]);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    login(values);
  };

  return (
    <div className="login">
      <h1>
        Account <span className="blue">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={values.email}
            onChange={onChange}
            name="email"
          />
          <label>email</label>
        </div>
        <div className="form-control">
          <input
            type="password"
            value={values.password}
            onChange={onChange}
            name="password"
          />
          <label>passowrd</label>
        </div>
        <div className="form-control">
          <input type="submit" value="Login" />
        </div>
      </form>
      <div>
        don't have an account?
        <Link to={process.env.PUBLIC_URL + '/register'}>register</Link>
      </div>
    </div>
  );
};

export default Login;
