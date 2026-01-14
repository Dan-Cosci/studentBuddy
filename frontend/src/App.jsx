import React from 'react'
import "./assets/css/style.css"

import toast from 'react-hot-toast'
import instance from './services/api.service.js'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import MainRouter from './routes/Main.routes.jsx'


const App = () => {

 
  
  return (
    <>
      <Navbar />
      <main className="main">
        <MainRouter />
      </main>
      <Footer />
    </>
  )
}

export default App
