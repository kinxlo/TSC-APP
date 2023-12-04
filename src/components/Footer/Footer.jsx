import React from 'react'
import './Footer.css'
import techstudio from '@assets/image/TSA community 1.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='custom-bg-dark-blue custom-text-white'>
      <div className='container-xl px-0 footer py-4 align-items-center'>
        <div className='text-start share mb-5 px-4 '>
          <img className='py-3' src={techstudio} alt='techstudio' />
          <p className='wecometotech text-start'>
            Welcome to Tech Studio Community hub,where you connect fellow tech enthusiasts,share knowledege,and explore endless possibilities
          </p>
        </div>
        <div className='text-start mb-5 '>
          <p className='fw-bold quicklink '>Quick Links</p>
          <div className='mainwebsite '>
            <p className='m-0'>Community</p>
            <p className='m-0'>Find Talent</p>
            <p className='m-0'>Go to main website</p>
          </div>
        </div>
        <div className='px-0'>
          <div className='text-start newsletter px-3'>
            <p className='Subscribe '>Subscribe to our Newsletter</p>
            <div className='position-relative inputadd '>
              <input className='w-100 positionrelative ps-2 bg-white ' type='text' placeholder='Email Address' />
              <div className='d-flex align-items-center gap-2 Faarrows custom-bg-dark-blue position-absolute px-2 '>
                <p className='m-0 termspolicy'>Subscribe</p>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='custom-text-white d-flex gap-4 align-items-center py-4 justify-content-center'>
        <p className='m-0 termspolicy'>Terms and Policy</p>
        <div className='d-flex gap-3 fs-5 align-items-center'>
          <a target='blank' className='custom-text-white' href='https://twitter.com/TechStudioAcdmy'>
            <BsTwitter />
          </a>

          <a target='blank' className='custom-text-white' href='https://www.instagram.com/techstudioacademy/'>
            <BsInstagram />
          </a>
          <a target='blank' className='custom-text-white' href='https://www.facebook.com/techstudioacademy'>
            {' '}
            <FaFacebookF />
          </a>
          <a className='custom-text-white ' href='https://ng.linkedin.com/company/tech-studio-academy'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
