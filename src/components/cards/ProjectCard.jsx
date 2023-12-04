import { Icon } from '@iconify/react'
import React from 'react'
import style from './card.module.scss'

/**
 * STUDY THIS CARD COMPONENT PROPERLY...THIS IS HOW YOU CAN USE SCSS THAT THE STYLING WILL NOT
 * CLASH WITH OTHER DEVS CODEBASE
 */

const ProjectCard = () => {
  return (
    <article className={style.card}>
      <img
        className={style.image}
        src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1701427609/techstudio/images/web-development-responsive-web-design-web-developer-png-favpng-PBDG4xGdfBVEqhzkx4EcCgSYF_1_tzuuhf.png'
        alt='project'
      />
      <div className={style.description}>
        <div className={style.name}>
          <div className={style.avatar}>
            <img src='https://res.cloudinary.com/kingsleysolomon/image/upload/v1678011321/project-yemsays/Rectangle_38_z8dfan.png' alt='avatar' />
          </div>
          <p>Multiple Owners</p>
        </div>
        <div className={style.like}>
          <Icon icon={`icon-park-outline:like`} />
          <p>232</p>
        </div>
        <div className={style.view}>
          <Icon icon={`carbon:view`} />
          <p>1.4k</p>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
