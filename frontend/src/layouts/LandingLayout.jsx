import React from 'react'
import LandingNav from '../components/LandingNav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <>
      <LandingNav />
      <Outlet />
      <Footer />
    </>
  )
}

export default LandingLayout