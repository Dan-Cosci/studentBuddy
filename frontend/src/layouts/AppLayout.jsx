import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const AppLayout = () => {

  return (
    <>
      <main className="app-layout">
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout