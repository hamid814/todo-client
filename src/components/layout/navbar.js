import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        Todo app
      </div>
      <div className='logo'>
        <img src={Logo} alt='todo-fullsatck-logo' />
      </div>
      <Link to={`${process.env.PUBLIC_URL}/register`}>
        register
      </Link>
    </nav>
  )
}

export default Navbar
