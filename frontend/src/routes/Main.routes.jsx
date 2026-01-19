import React from 'react'
import { LandingRoutes } from './Landing.routes.jsx'
import { AppRoutes } from './App.routes.jsx'
import { Routes } from 'react-router-dom'

function MainRouter() {
  return (
    <>  
      <Routes >
        {LandingRoutes }
        {AppRoutes }
      </Routes >
    </>
  )
}

export default MainRouter