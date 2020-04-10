import React from 'react'
import { Link } from 'react-router-dom';

import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        Todo app
      </div>
      <Link to={`${process.env.PUBLIC_URL}/register`}>
        register
      </Link>
    </nav>
  )
}

export default Navbar
