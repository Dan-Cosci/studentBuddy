import React from 'react'
import { Routes, Route } from 'react-router-dom'

function landingRoutes() {
  return (
    <Routes> 
      <Route path="/" element={<div>Landing Page</div>} />
      <Route path="/login" element={<div>Login Page</div>} />
      <Route path="/register" element={<div>Register Page</div>} />
      <Route path="/404" element={<div>404 Page</div>} />
    </Routes>
  )
}

export default landingRoutes