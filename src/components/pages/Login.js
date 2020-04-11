import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './login.scss';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  
  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async e => {
    e.preventDefault();
    
    try {
      const res = await axios.post('/api/auth/login', {
        email: values.email,
        password: values.password
      });
      
      localStorage.setItem('token', res.data.token)
    } catch (err) {
      console.log(err.response.data.message)
    }
  }
  
  return (
    <div className='login'>
      <h1>
        Account <span className='blue'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" value={values.email} onChange={onChange} name="email" />
          <label>email</label>
        </div>
        <div className="form-control">
          <input type="password" value={values.password} onChange={onChange} name="password" />
          <label>passowrd</label>
        </div>
        <div className="form-control">
          <input type="submit" value="Login"/>
        </div>
      </form>
      <div>
        don't have an account?
        <Link to={process.env.PUBLIC_URL + '/register'}>
          register
        </Link>
      </div>
    </div>
  )
}

export default Login
