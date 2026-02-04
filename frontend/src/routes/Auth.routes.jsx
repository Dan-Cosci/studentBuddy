import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Page404 from '../features/Page404.jsx'

import AuthLayout from '../features/auth/layout/AuthLayout.jsx';
import AuthForm from '../features/auth/pages/AuthForm.jsx';


export const AuthRoutes = ( 

  <Route path='/' element={<AuthLayout />}>
    <Route path='auth' element={<AuthForm />} />
    <Route path="*" element={<Page404 />} />
  </Route>
)
