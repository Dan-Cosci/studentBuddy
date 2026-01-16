import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingLayout from '../layouts/LandingLayout.jsx'
import Landing from '../pages/Landing/Landing.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Page404 from '../pages/Page404.jsx';

export const LandingRoutes = ( 
  <>
    <Route path="/" element={<LandingLayout />} >
      <Route index element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  </>
)
