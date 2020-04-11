import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './register.scss';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
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
      const res = await axios.post('/api/auth/register', {
        name: values.name,
        email: values.email,
        password: values.password
      });
      
      localStorage.setItem('token', res.data.token)
    } catch (err) {
      console.log(err.response.data.message)
    }
  }
  
  return (
    <div className='register'>
      <h1>
        Account <span className='blue'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <input type="text" value={values.name} onChange={onChange} name="name" />
          <label>name</label>
        </div>
        <div className="form-control">
          <input type="text" value={values.email} onChange={onChange} name="email" />
          <label>email</label>
        </div>
        <div className="form-control">
          <input type="password" value={values.password} onChange={onChange} name="password" />
          <label>passowrd</label>
        </div>
        <div className="form-control">
          <input type="submit" value="Reginster"/>
        </div>
      </form>
      <div>
        already have an account?
        <Link to={process.env.PUBLIC_URL + '/login'}>
          login
        </Link>
      </div>
    </div>
  )
}

export default Register
