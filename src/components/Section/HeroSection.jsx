import React from 'react'
import styles from './Section.module.scss'
import herosection from '@assets/image/Hero section Image.png'
import { Link } from 'react-router-dom'
const Herosection = () => {
  return (
    <div className='container'>
      <div className='d-flex gap-10 align-items-center'>
        <div className='div1 text-start'>
          <h1 className=' possibilities'>Explore, Connect And Innovative</h1>
          <p className={`${styles.limitless}`}>
            Dive into a world of limitless possibilities, where coding languages speak louder than words and digital innovations shape the future. Engage in
            discussions, collaborate on projects, and build lasting relationships that could shape your tech journey.
          </p>
          <div className={`d-flex align-items-start mt-10`}>
            <Link to={`/signup`}>
              <button type='button' className='btn btn-primary '>
                Join community
              </button>
            </Link>
          </div>
        </div>
        <div className='py-5'>
          <img className='heroimage' src={herosection} alt='herosectionimage' />
        </div>
      </div>
    </div>
  )
}

export default Herosection
