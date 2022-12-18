import React from 'react'
import { projects } from '../constants'

const MyWorksPage = () => {
  return (
    <div className="pb-8 sm:pt-[150px] pt-[120px]">
      <h1 className='sm:mb-8'>PROJECTS</h1>
      <div className="flex flex-col gap-16 py-8">
        {
          projects.map(project => (
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-16 sm:even:flex-row-reverse">
              <div className='sm:w-[50%] w-[100%]'>
                <a
                  href={project.link}
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full'
                  />
                </a>
              </div>
              <div className="flex flex-col sm:w-[50%] w-[100%]">
                <h5 className=''>{project.rank}</h5>
                <h3 className='text-primary my-2'>
                  {project.title}
                </h3>
                <p className='font-normal'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptas voluptatem. Obcaecati at numquam laborum possimus vel! Sapiente perferendis veritatis distinctio temporibus inventore excepturi corporis ipsam fuga optio.
                </p>
                <h5 className='my-2 font-semibold'>
                  Responsiveness: <span className="text-primary">{project.responsiveness}</span>
                </h5>
                <div className="flex py-4">
                  <a
                    href={project.link}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="btn btn3 btn2"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default MyWorksPage