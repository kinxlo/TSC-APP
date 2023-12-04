import React from 'react'
import Section from '@components/Section/Section'
import FilterPages from '@pages/external-pages/landing-page/FilterPages/FilterPages'
import NavBar from '../../../../components/NavBar/NavBar'
import Footer from '../../../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
      <NavBar />
      <Section />
      <FilterPages />
      <Footer />
    </div>
  )
}

export default Home
