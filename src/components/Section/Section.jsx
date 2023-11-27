import React from 'react'
import './Section.css'
import herosection from '@assets/image/Hero section Image.png'
const Section = () => {
  return (
    <div className='section py-5'>
      <div className='div2 container-xl px-3 gap-5 py-4 '>
        <div className='div1 text-start'>
          <h1 className=' possibilities'>Explore, Connect And Innovative</h1>
          <p className=' limitless '>
            Dive into a World of limitless posibilities, where coding language speak louder than words and digital innovations shape the future,Engage in
            discussions,collaborate on projects,and build lasting relationship that could shape your tech journey.
          </p>
          <p className='custom-bg-light-blue py-2 JoinCommunity rounded-3 custom-text-white'>Join Community</p>
        </div>
        <div className='py-5'>
          <img className='heroimage' src={herosection} alt='herosectionimage' />
        </div>
      </div>
    </div>
  )
}

export default Section
