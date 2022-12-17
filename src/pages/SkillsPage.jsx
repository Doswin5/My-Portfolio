import React from 'react'
// import { html } from '../assets'
import { technologies } from '../constants'

const SkillsPage = () => {
  return (
    <div className='py-8'>
      <h1>SKILLS & TECHNOLOGIES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 my-12 gap-8">
        {
          technologies.map(technology => (
            <div className="flex flex-col items-center gap-4">
              <img 
                src={technology.icon} 
                alt="tech"
                className='skill-bg object-contain w-[120px] h-[120px] sm:w-[150px] sm:h-[150px]' 
              />
              <h4>{technology.title}</h4>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default SkillsPage