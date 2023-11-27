import React, { useState } from 'react'
import './FilterPages.css'
import { MdKeyboardArrowDown } from 'react-icons/md'
// import { GoHeart } from 'react-icons/go'
// import { FiEye } from 'react-icons/fi'

import frame1 from '@assets/image/Frame 1000002420 (1).png'
import frame2 from '@assets/image/Frame 1171275807 (1).png'
import frame3 from '@assets/image/Frame 1000002427.png'
import frame4 from '@assets/image/Frame 1171275808.png'
import frame5 from '@assets/image/Frame 1171275831.png'
import frame6 from '@assets/image/Frame 1171275833.png'
import frame7 from '@assets/image/nature view.png'
import frame8 from '@assets/image/fortune.png'
import frame9 from '@assets/image/Component 44.png'
import frame10 from '@assets/image/coffee.png'

const FilterPages = ({ filterdByCourse, communityUsers }) => {
  //   const posts = [
  //     {
  //       image: frame1,
  //       title: "Hello World",
  //       profilePicture: frame1,
  //       views: "1.4k",
  //       likes: "1000",
  //     },
  //     {
  //       image: frame1,
  //       title: "Hello World",
  //       profilePicture: frame1,
  //       views: "1.4k",
  //       likes: "1000",
  //     },
  //   ];
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [options, setOptions] = useState(['All', 'Product Design', 'Web development', 'Data Analysis'])
  const [selectedRegion, setSelectedRegion] = useState('filter By Course')
  return (
    <div className='findpages container-xl'>
      <div className='d-flex align-items-center justify-content-between py-2 filterdiv1 px-0'>
        <div>
          <p className='m-0  filterdiv3'>Community Projects</p>
        </div>
        <div
          onClick={() => {
            setToggleDropdown(!toggleDropdown)
          }}
          style={{ cursor: 'pointer' }}
          className='d-flex  align-items-center  gap-4 position-relative border border-2 border-black px-2 py-1 rounded-2 filterdiv2'
        >
          <p className='m-0'>{selectedRegion}</p>
          <MdKeyboardArrowDown
            className='fs-5 '
            style={{
              transform: toggleDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.3s ease in out',
            }}
          />
          {toggleDropdown && (
            <ul className='w-100 rounded-2 fw-semibold top-100 mt-1 position-absolute custom-bg-light-blue text-white ps-1 pe-3 py-3'>
              {options.map((option) => {
                return (
                  <li
                    onClick={() => {
                      setSelectedRegion(option === 'All' ? 'Filter by Course' : option)
                      setToggleDropdown(false)
                      filterdByCourse(option)
                    }}
                    className=' text-start filterdiv2 '
                    key={option}
                  >
                    {option}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      {/* <div className="align-items-center d-flex gap-5">
        <div className="d-flex gap-1 align-items-center">
          <img className="rounded-5" src={image} />
          <p className="m-0 fs-5 fw-semibold">{name}</p>
        </div>
        <div className="d-flex gap-5">
          <div
            onClick={() => {
              updateUI("add", _id, token, user?.id);
            }}
            className="position-relative"
          >
            <p className="m-0">{like}</p>
            <GoHeart className="fs-5" />
            <p className="position-absolute input1 fs-5">0</p>
          </div>
          <div
            onClick={() => {
              updateUI("add", _id, token, user?.id);
            }}
            className="position-relative "
          >
            <p className="m-0">{views}</p>
            <FiEye className="fs-5" />
            <p className="position-absolute input1 fs-5 ">0</p>
          </div>
        </div>
      </div> */}
      <div className='container gap-3'>
        <img className='box  ' src={frame1} alt='' />
        <img className='box ' src={frame2} alt='' />
        <img className='box ' src={frame3} alt='' />
        <img className='box ' src={frame4} alt='' />
        <img className='box ' src={frame5} alt='' />
        <img className='box ' src={frame6} alt='' />
        <img className='box ' src={frame7} alt='' />
        <img className='box ' src={frame8} alt='' />
        <img className='box ' src={frame9} alt='' />
        <img className='box ' src={frame10} alt='' />
        <img className='box ' src={frame2} alt='' />
        <img className='box ' src={frame6} alt='' />
      </div>

      {/* ========================================================= */}

      {/* {posts.map((post) => {
        return (
          <div>
            <img className="w-100" src={post.image} alt="" />
            <div className="d-flex gap-3">
              <img
                style={{
                  width: "20px",
                }}
                src={post.image}
                alt=""
              />
              <p>{post.title}</p>
            </div>

            <div></div>
          </div>
        );
      })} */}
    </div>
  )
}

export default FilterPages
