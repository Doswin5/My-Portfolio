import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex flex-col h-[70.5vh] justify-center pb-8 sm:pt-[150px] pt-[120px]">
      <h3>Hi, i am</h3>
      <h2 className='text-[18px] sm:text-[24px] '>
        DOSUNMU AYOMIDE.
      </h2>
      <h3 className='text-primary text-[28px] sm:text-[40px]'>A Frontend Web Developer.</h3>
      <div className='mt-4 flex items-center gap-4'>
        <Link to='/contact'>
          <button className='hover:bg-primaryHover'>Hire Me</button>
        </Link>
        <Link to='/my-works' className='text-primary'>
          <button className='btn3'>My Works</button>
        </Link>
      </div>

    </div>
  )
}

export default Hero