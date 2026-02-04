import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingLayout from '../features/landing/layout/LandingLayout.jsx'
import Landing from '../features/landing/pages/Landing.jsx';
import Page404 from '../features/Page404.jsx';

export const LandingRoutes = ( 
  <>
    <Route path="/" element={<LandingLayout />} >
      <Route index element={<Landing />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  </>
)
