import React from 'react'
import landingRoutes from './landing.routes.jsx'
import appRoutes from './app.routes.jsx'
import { Routes } from 'react-router-dom'

function mainRouter() {
  return (
      <Routes>
        {landingRoutes}
        {appRoutes}
      </Routes>
  )
}

export default mainRouter