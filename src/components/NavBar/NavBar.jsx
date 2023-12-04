import React from 'react'
import './NavBar.css'
import techstudio from '@assets/image/TSA community 1.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='custom-bg-dark-blue  justify-content-between  py-3 align-items-center mb-2'>
      <div className=' container-xl navbar px-4'>
        <img src={techstudio} alt='techstudioimage' />
        <div className='explore'>
          <Link to={`/community`} className='m-0 text-white'>
            Explore community
          </Link>
          <Link className='m-0 text-white'>Find Talent</Link>
          <Link className='m-0 text-white'>For you</Link>
        </div>
        <div className='register align-items-center'>
          <Link to={'/signup'} className='custom-bg-light-blue text-white px-4 py-1 rounded-2 m-0'>
            Register
          </Link>
          <Link to={'/signin'} className='m-0 text-white'>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
