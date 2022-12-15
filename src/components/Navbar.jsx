import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-12'>
      <Link to='/'>
        Go to Home Page
      </Link>
      <Link to='/about'>
        Go to About Page
      </Link>
      <Link to='/my-works'>
        Go to My Works Page
      </Link>
      <Link to='/skills'>
        Go to Skills Page
      </Link>
    </div>
  )
}

export default Navbar