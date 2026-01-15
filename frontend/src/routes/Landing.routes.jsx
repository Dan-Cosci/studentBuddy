import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingLayout from '../layouts/LandingLayout.jsx'
import Landing from '../pages/Landing/Landing.jsx';
import Login from '../pages/Login.jsx';

export const LandingRoutes = ( 
  <>
    <Route path="/" element={<LandingLayout />} >
      <Route index element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<div>Register Page</div>} />
      <Route path="*" element={<div>404 Page</div>} />
    </Route>
  </>
)