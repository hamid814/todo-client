import React, { useState } from 'react';
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
    e.preventDefault()
    
    try {
      const data = await axios.post('/api/auth/register')
      console.log(data)
    } catch (err) {
      console.log(err)
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
    </div>
  )
}

export default Register
