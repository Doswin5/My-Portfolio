import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="flex flex-col h-[70.5vh] justify-center">
      <h3>Hi, i am</h3>
      <h2 className='text-primary'>
        DOSUNMU AYOMIDE.
      </h2>
      <h3>A Frontend Web Developer.</h3>
      <div className='mt-4 flex items-center gap-4'>
        <Link to='/contact'>
          <button>Hire Me</button>
        </Link>
      </div>

    </div>
  )
}

export default Hero