import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthState';

import './register.scss';

const Register = (props) => {
  const alertElem = useRef(null);

  const { isAuthenicated, register, error, clearError } = useContext(
    AuthContext
  );

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthenicated) {
      props.history.push('/');
    }

    if (error) {
      if (error === 'Duplicate field value entered') {
        setAlert('User already exists');
      } else {
        setAlert(error, 3000);
      }
    }
    // eslint-disable-next-line
  }, [isAuthenicated, error]);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    register(values);
  };

  const setAlert = (msg, time = 3000) => {
    alertElem.current.innerText = msg;

    setTimeout(() => {
      alertElem.current.innerHTML = '';
      clearError();
    }, time);
  };

  return (
    <div className="register">
      <h1>
        Account <span className="blue">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={values.name}
            onChange={onChange}
            name="name"
          />
          <label>name</label>
        </div>
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
          <input type="submit" value="Reginster" />
        </div>
      </form>
      <div ref={alertElem} className="alert"></div>
      <div>
        already have an account?
        <Link to={process.env.PUBLIC_URL + '/login'}>login</Link>
      </div>
    </div>
  );
};

export default Register;
