import React from 'react'
import { LandingRoutes } from './Landing.routes.jsx'
import { AppRoutes } from './App.routes.jsx'
import { Routes } from 'react-router-dom'
import { AuthRoutes } from './Auth.routes.jsx'

function MainRouter() {
  return (
    <>  
      <Routes >
        {LandingRoutes }
        {AuthRoutes }
        {AppRoutes }
      </Routes >
    </>
  )
}

export default MainRouter