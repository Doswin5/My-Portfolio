import React from 'react'
import { resume, download } from '../assets'

const AboutPage = () => {
  return (
    <div className='py-8'>
      <h1>ABOUT ME</h1>
      <p className='my-2 sm:my-4'>
        I'm a Frontend Web Developer who is enthusiastic about the <span className='text-primary'>process of  developing products that address user issues with particular needs</span>  in a given market and <span className='text-primary'>who has an interest in human-centered approaches and human behavior</span>.
        <br />
        <br />
        You can read more about <span className='text-primary'>my biography, experience, skills, education and much more in the PDF</span>  attached below:
        <br />
        <br />
        <a
          href={resume}
          download='Ayomide resume.pdf'
          className='btn flex flex-row items-center btn2 '
        >
          Download CV
          <img
            src={download}
            alt="download"
            className='w-[24px] h-[24px] inline ml-2'
          />
        </a>
      </p>
    </div>
  )
}

export default AboutPage