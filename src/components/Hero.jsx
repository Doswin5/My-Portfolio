import React from 'react'
import { resume, download } from '../assets'

const Hero = () => {
  return (
    <div className="flex flex-col h-[70.5vh] justify-center">
      <h3>Hi, i am</h3>
      <h2 className='text-primary'>
        DOSUNMU AYOMIDE.
      </h2>
      <h3>A Frontend Web Developer.</h3>
      <div className='mt-8'>
        <a 
          href={resume} 
          download='Ayomide reume.pdf'
          className='btn flex flex-row items-center'
        >
          Download CV
          <img 
            src={download} 
            alt="download" 
            className='w-[24px] h-[24px] inline ml-2'
          />
        </a>

      </div>

    </div>
  )
}

export default Hero