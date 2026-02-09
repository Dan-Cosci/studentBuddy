import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from '../features/app/layout/AppLayout.jsx'
import Page404 from '../features/Page404.jsx'

import Active from '../features/app/pages/Active.jsx';
import Dashboard from '../features/app/pages/Dashboard.jsx';
import ProtectedRoute from './Protected.routes.jsx';


export const AppRoutes = ( 

  <Route path='/app' element={<ProtectedRoute />}>
    <Route element={<AppLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='note/:id' element={<Active />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  </Route>
)
