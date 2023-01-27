import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sun, moon, menu, close } from '../assets'

const Navbar = ({ toggleMode, handleToggleMode }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <div 
      className={`${toggleMode ? 'bg-darkM text-lightM' : 'bg-lightM text-darkM'} fixed sm:left-[100px] sm:right-[100px] left-[16px] right-[16px] top-0 flex justify-between items-center py-4 sm:py-8 border-b-2 border-primary`}
    >
      <div>
        <img 
          src={toggleMode ? sun : moon} 
          alt="mode" 
          className='w-8 h-8 cursor-pointer'
          onClick={handleToggleMode}
        />
      </div>
      <div className='sm:flex justify-end gap-12 items-center hidden'>
        <NavLink style={({ isActive }) => { return { color: isActive ? '#b3541e' : '' }; }} to='/'>
          Home
        </NavLink>
        <NavLink style={({ isActive }) => { return { color: isActive ? '#b3541e' : '' }; }} to='/about'>
          About
        </NavLink>
        <NavLink style={({ isActive }) => { return { color: isActive ? '#b3541e' : '' }; }} to='/skills'>
          Skills & Technologies
        </NavLink>
        <NavLink style={({ isActive }) => { return { color: isActive ? '#b3541e' : '' }; }} to='/my-works'>
          My Works
        </NavLink>
        <Link to='/contact'>
          <button className='hover:bg-primaryHover'>Contact Me</button>
        </Link>
      </div>

      <div className="flex flex-1 justify-end sm:hidden items-center" >
        <div 
          className='w-[48px] h-[48px] flex items-center justify-center rounded-full bg-primary cursor-pointer'
          onClick={() => setToggle(prev => !prev)}
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[16px] h-[16px] cursor-pointer object-cover'
            
          />
        </div>
        <div
          className={`${toggle ? 'flex' : 'hidden'} justify-center py-6 px-6 absolute top-20 right-0 mx-4 my-2 min-w-[60px] rounded-xl sidebar bg-primary text-lightM items-center`}
        >
          <div className='flex flex-col gap-6 items-center'>
            <Link 
              to='/' 
              onClick={() => setToggle(prev => !prev)}
              className='hover:text-lightM'
            >
              Home
            </Link>
            <Link 
              to='/about' 
              onClick={() => setToggle(prev => !prev)}
              className='hover:text-lightM'
            >
              About
            </Link>
            <Link 
              to='/skills' 
              onClick={() => setToggle(prev => !prev)}
              className='hover:text-lightM'
            >
              Skills & Technologies
            </Link>
            <Link 
              to='/my-works' 
              onClick={() => setToggle(prev => !prev)}
              className='hover:text-lightM'
            >
              My Works
            </Link>
            <Link to='/contact' onClick={() => setToggle(prev => !prev)}>
              <button>Contact Me</button>
            </Link>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Navbar