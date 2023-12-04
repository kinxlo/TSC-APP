// import React from 'react'
import { Link } from 'react-router-dom'
import tsalogo from '@assets/TSA logo.svg'
import lineIcon from '@assets/lineIcon.svg'
import twitter from '@assets/twitter.svg'
import facebook from '@assets/facebook.svg'
import google from '@assets/google.svg'
import signupVector from '@assets/Vector photo signup.svg'
import { MdInfo } from 'react-icons/md'
import './scss/SignUp.scss'
import ShowEye from '@components/dropDownShowEye/ShowEye'
import { useState } from 'react'
import DropDown from '@components/dropDownShowEye/DropDown'

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

  return (
    <div className='sign-up d-flex position-relative '>
      <div
        style={{
          height: '100vh',
          position: 'sticky',
          top: '0',
          width: '100%',
        }}
        className='sign-up-frame-1 bg-primary border border-primary d-none d-lg-flex align-items-center w-50'
      >
        <div className='container d-flex flex-column justify-content-center align-items-center gap-5 p-1 '>
          <Link to={'/'}>
            <img className='position-absolute tsa-logo ' src={tsalogo} alt='' />
          </Link>

          <img
            className='signup-vector img-fluid mb-5 signup-vector position-absolute '
            src={signupVector}
            alt=''
            style={{
              width: '70%',
            }}
          />
        </div>
      </div>

      <div className='sign-up-section d-sm-flex p-10 my-5 mx-auto rounded-3 align-items-center'>
        <section className='section-for-signup'>
          <div className='sign-up-content-padding '>
            <div className='mb-4'>
              <h3 className='fw-bold'>Register</h3>
              <p className='register-p'>Enter Details To Create Account.</p>
            </div>
            <form action=''>
              <div className='guest-name d-flex gap-4'>
                <div className='sign-up-first-name d-flex flex-column gap-1'>
                  <label className='fw-bold' htmlFor=''>
                    First Name
                  </label>
                  <input className='p-2 ps-4 rounded border-1' type='text' />
                </div>
                <div className='sign-up-last-name d-flex flex-column gap-1 mb-3'>
                  <label className='fw-bold' htmlFor=''>
                    Last Name
                  </label>
                  <input className='p-2 ps-4 rounded border-1' type='text' />
                </div>
              </div>

              <div className='community-group d-flex flex-column gap-1 mb-3 '>
                <label className='fw-bold' htmlFor='community'>
                  Community Group
                </label>
                {/* <select
                    className=" p-2 rounded align-items-center"
                    name="lists"
                    id=""
                    required
                  >
                    <option className="p-2" value="" disabled selected hidden>
                      Select Community
                    </option>
                    <option className="" value="">
                      Data Analysis
                    </option>
                    <option className="" value="">
                      Web Development
                    </option>
                    <option className="" value="">
                      Product Design
                    </option>
                  </select> */}
                <DropDown />
              </div>
              <div className='d-flex flex-column gap-1 mb-3'>
                <label className='fw-bold' htmlFor='email'>
                  Email Address
                </label>
                <p className='input-p'>
                  <span className='email-info'>
                    <MdInfo />
                  </span>{' '}
                  Input the email you used in registering at TechStudio.
                </p>
                <input className='p-2 rounded border-1' name='email' type='text' id='email' />
              </div>

              <div className='d-flex flex-column gap-1 mb-3'>
                <label className='fw-bold' htmlFor='email'>
                  Cohort
                </label>

                <input
                  className='p-2 rounded border-1 
                  cohort-background'
                  name='email'
                  type='text'
                  id='email'
                />
              </div>

              <div className='d-flex flex-column gap-1 mb-3'>
                <label className='fw-bold' htmlFor='password'>
                  Password
                </label>
                <div className='position-relative'>
                  <input className='w-100 p-2 rounded border-1' name='password' type={passwordVisible ? 'text' : 'password'} id='password' />

                  <ShowEye
                    eyeState={passwordVisible}
                    updateEye={setPasswordVisible}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                </div>
              </div>

              <div className='d-flex flex-column gap-1 mb-4'>
                <label className='fw-bold' htmlFor='Confirm password'>
                  Confirm Password
                </label>
                <div className='position-relative'>
                  <input className='w-100 p-2 rounded border-1' name='confirm password' type={confirmPasswordVisible ? 'text' : 'password'} id='password' />
                  <ShowEye eyeState={confirmPasswordVisible} updateEye={setConfirmPasswordVisible} />
                </div>
              </div>

              <button className='btn btn-primary mb-4 mt-3 p-2 w-100 fs-5'>Register</button>

              <div className='d-flex gap-2 justify-content-center'>
                <p className='text-center'>Already have an account?</p>
                <Link to={'/signin'} className='text-decoration-none'>
                  Login
                </Link>
              </div>
            </form>

            <div className='d-flex gap-1 justify-content-center align-items-center mt-2 mb-4'>
              <div>
                <img src={lineIcon} alt='' />
              </div>
              <p className='fw-bold m-0'>OR</p>
              <div>
                <img src={lineIcon} alt='' />
              </div>
            </div>

            <div className='d-flex justify-content-center gap-3'>
              <img src={twitter} alt='' />
              <img src={facebook} alt='' />
              <img src={google} alt='' />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SignUp
