import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingLayout from '../layouts/LandingLayout.jsx'
import Landing from '../pages/Landing/Landing.jsx';

export const LandingRoutes = ( 
  <>
    <Route path="/" element={<LandingLayout />} >
      <Route index element={<Landing />} />
      <Route path="login" element={<div>Login Page</div>} />
      <Route path="register" element={<div>Register Page</div>} />
      <Route path="*" element={<div>404 Page</div>} />
    </Route>
  </>
)