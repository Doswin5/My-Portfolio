import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <div className={`flex sm:justify-between sm:flex-row flex-col-reverse gap-4  items-center py-8 border-t-2 border-primary`}>
      <small>&copy; Twenty Twenty Two <span className='text-primary'>DEV_DOSWIN</span>.</small>
      <div className="flex items-center gap-4 sm:gap-8">
        {
          footerLinks.map(footerLink => (
            <a 
              href={footerLink.link} 
              title={footerLink.message}
              target='_blank'
              rel="noopener noreferrer"
            >
              <img 
                src={footerLink.icon} 
                alt={footerLink.title}
                className='skill-bg2 w-[24px] h-[24px]'
              />
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default Footer