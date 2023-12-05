// import frame1 from '@assets/image/Frame 1000002420 (1).png'
// import frame2 from '@assets/image/Frame 1171275807 (1).png'
// import frame3 from '@assets/image/Frame 1000002427.png'
// import frame4 from '@assets/image/Frame 1171275808.png'
// import frame5 from '@assets/image/Frame 1171275831.png'
// import frame6 from '@assets/image/Frame 1171275833.png'
// import frame7 from '@assets/image/nature view.png'
// import frame8 from '@assets/image/fortune.png'
// import frame9 from '@assets/image/Component 44.png'
// import frame10 from '@assets/image/coffee.png'
import { Icon } from '@iconify/react'
import ProjectCard from '../../../../components/cards/ProjectCard'
import style from './scss/filterPage.module.scss'

const FilterPages = () => {
  // the array is just a representation of projects..
  const projectCardList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((projects, index) => {
    return <ProjectCard key={index} />
  })

  return (
    <div className='findpages container-xl'>
      <div className='d-flex align-items-center justify-content-between py-2 filterdiv1 px-0'>
        <div>
          <p className='m-0 h3 fw-bold'>Community Projects</p>
        </div>
        <div className='dropdown'>
          <button className='btn btn-transparent border dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
            Filter By
            <Icon className={`ms-4`} icon='mdi:chevron-down' />
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                Data Analysis
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Web Developer
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Product Design
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.gridLayout}>{projectCardList}</div>
    </div>
  )
}

export default FilterPages

// import React from 'react'

// const FilterPages = () => {
//   return <div>FilterPages</div>
// }

// export default FilterPages
