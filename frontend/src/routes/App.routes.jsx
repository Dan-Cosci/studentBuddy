import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout.jsx'
import Page404 from '../pages/Page404.jsx'

import Active from '../pages/App/Active.jsx';
import ProtectedRoute from './Protected.routes.jsx';


export const AppRoutes = ( 

  <Route path='/app' element={<ProtectedRoute />}>
    <Route element={<AppLayout />}>
      <Route index element={<Active />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  </Route>
)
