import React from 'react'
import { LandingRoutes } from './Landing.routes.jsx'
import { AppRoutes } from './App.routes.jsx'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Page404 from '../pages/Page404.jsx'

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