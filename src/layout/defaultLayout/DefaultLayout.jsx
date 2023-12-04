import React from 'react'
import styles from './scss/layout.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import FooterSample from '../../components/Footer/FooterSample'
// import Footer from '../../components/Footer/Footer'

// eslint-disable-next-line react/prop-types
const DefaultLayout = () => {
  return (
    <>
      <main className={`${styles.main}`}>
        <NavBar />
        <Outlet />
        {/* <Footer /> */}
        {/* replace this with your own footer...look at the way the sample is styled...and modify yours */}
        <FooterSample />
      </main>
    </>
  )
}

export default DefaultLayout
