import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { projects } from '../constants'
// import { project1 } from '../assets'

const ContactPage = () => {
  // const [current, setCurrent] = useState(0)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    // subscribed: false,
  })

  function handleChange(event) {
    const {name, value, checked, type} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    setFormData({
      fullName: '',
      email: '',
      message: '',
      subscribed: false,
    })
  }

  // function nextImage() {
  //   setCurrent(prev => prev + 1)
  // }

  // function previousImage() {
  //   setCurrent(prev => prev - 1)
  //   console.log(current)
  // }

  return (
    <div className='pb-16 sm:pt-[150px] pt-[120px] flex flex-col justify-center items-center'>
      {/* <div className="carousel flex flex-row justify-center max-w-[400px] relative">
        <img 
          src={projects[current].image} 
          alt=""
          className='w-full object-cover' 
        />
        {
          current < projects.length - 1 && (<div
            className="cursor-pointer absolute top-[50%] -translate-y-1/2 right-0 p-4 rounded-sm bg-darkM text-white"
            onClick={() => setCurrent(prev => prev + 1)}
          >
            Next
          </div>)
        }
        {
          current > 0 && (
            <div 
              className="cursor-pointer absolute top-[50%] -translate-y-1/2 left-0 p-4 rounded-sm bg-darkM text-white"
              onClick={() => setCurrent(prev => prev - 1)}
            >
              Previous
            </div> 

          )
        }
      </div>
      <h4 className='mt-4'>{projects[current].title}</h4> */}

      <h1 className='mb-2'>Get In Touch</h1>
      <p className='mb-12 w-[80%] sm:w-[40%] text-center'>
        Are you interested in collaborating with me on a Project? Hit me up. I'm open to Freelance, Part time and Developer roles also.
      </p>
      <form className='max-w-[300px]' onSubmit={handleSubmit}>
        <input 
          className='w-full bg-transparent p-2 border-b-[1.5px] border-l-[1.5px] border-primary text-primary outline-none placeholder:text-[12px] mb-4'
          type="text"
          placeholder='Enter Your Full Name'
          name='fullName'
          onChange={handleChange} 
          value={formData.fullName}
        />
        <input 
          className='w-full bg-transparent p-2 border-b-[1.5px] border-l-[1.5px] border-primary text-primary outline-none placeholder:text-[12px] mb-4'
          type="email"
          placeholder='Enter Your Email'
          name='email' 
          onChange={handleChange}
          value={formData.email}
        />
        <textarea 
          className='w-full bg-transparent p-2 border-b-[1.5px] border-l-[1.5px] border-primary text-primary outline-none placeholder:text-[12px] mb-2 resize-none'
          placeholder='Your Message'
          name='message' 
          onChange={handleChange}
          value={formData.message}
        />
        {/* <input 
          className='mr-2'
          type="checkbox"
          id='subscribed'
          checked={formData.subscribed}
          name='subscribed'
          onChange={handleChange}
        />
        <label htmlFor="subscribed">Subscribe to my Newsletter</label> */}
        <div className='flex flex-col items-center mt-4'>
          <button className='px-[24px] py-[8px] text-[12px] hover:bg-primaryHover '>Submit</button>
          <span className='text-[16px] mt-4'>
            Or <a href="mailto:ayomidedosunmuoreoluwa@gmail.com?subject=Mail from Portfolio"
            className='text-primary'
            >
              send a mail
            </a> for a quicker response.
          </span>
        </div>
      </form>
    </div>
  )
}

export default ContactPage