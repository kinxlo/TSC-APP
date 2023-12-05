import React, { useState } from 'react'
import './NavBar.css'
import techstudio from '@assets/image/TSA community 1.png'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

const NavBar = () => {
  // =========================NAVBAR DROPDOWN LOGIC========================
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  return (
    // <div className='bg-blue justify-content-between  py-3 align-items-center mb-2'>
    //   <div className=' container-xl navbar px-4'>
    //     <Link to={`/`}>
    //       <img src={techstudio} alt='techstudioimage' />
    //     </Link>
    //     <div className='explore d-flex gap-10'>
    //       <Link to={`/community`} className='m-0 text-white'>
    //         Explore community
    //       </Link>
    //       <Link className='m-0 text-white'>Find Talent</Link>
    //       <Link className='m-0 text-white'>For you</Link>
    //     </div>
    //     <div className='register d-flex gap-10 align-items-center'>
    //       <Link to={'/signup'} className='bg-lightBlue text-white px-4 py-1 rounded-2 m-0'>
    //         Register
    //       </Link>
    //       <Link to={'/signin'} className='m-0 text-white'>
    //         Login
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <nav className='navbar fixed-top navbar-expand-lg navbar-dark'>
      <div className='container d-flex align-items-center'>
        <div className='logo'>
          <Link to={`/home`}>
            <img src='../../../src/assets/TSA community 3.png' alt='techstudio logo' className='img-fluid' />
          </Link>
        </div>
        <div className='tabs d-lg-flex d-md-none d-sm-none d-none'>
          <Link to={`/community`} className='m-0 text-decoration-none tabs-link'>
            Explore Community
          </Link>
          <Link to={`/find-talent`} className='m-0 text-decoration-none tabs-link'>
            Find Talent
          </Link>
          <Link to={`/foryou`} className='m-0 text-decoration-none tabs-link'>
            For You
          </Link>
        </div>
        <div className='auth d-lg-flex d-md-none d-sm-none d-none'>
          <Link to={`/signup`} className='auth-link'>
            <button>Register</button>
          </Link>
          <Link to={`/signin`} className='m-0 text-decoration-none auth-link'>
            Login
          </Link>
        </div>

        {/* <!-- =============MQ NAVBAR================= --> */}

        <div className='drop d-lg-none d-md-flex d-sm-flex'>
          <i className='bi bi-list text-white' onClick={toggleDropdown}></i>
          <div className={`tabs profile-dropdown ${isDropdownOpen ? 'active' : ''}`}>
            <div className='bluedrop border d-flex flex-column gap-2 align-items-center justify-content-center rounded-2 end-0'>
              <Link to={`/community`} className='m-0 text-decoration-none text-center tabs-link'>
                Explore Community
              </Link>
              <Link to={`/find-talent`} className='m-0 text-decoration-none tabs-link'>
                Find Talent
              </Link>
              <Link to={`/foryou`} className='m-0 text-decoration-none tabs-link'>
                For You
              </Link>
              <Link to={`/signin`}>
                <button className='btn btn-primary auth-link'>Register</button>
              </Link>
              <Link to={`/signup`} className='log m-0 text-decoration-none auth-link'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
