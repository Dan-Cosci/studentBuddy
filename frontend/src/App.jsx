import React from 'react'
import "./assets/css/style.css"

import toast from 'react-hot-toast'
import instance from './services/api.service.js'

const App = () => {

  const buttonClick = () => {
    toast.success("Hello world")
    instance.get('/notes/').then((res) => {
      console.log(res)
    })
  }
  
  return (
    <main className="main">
      <h1 className=''>Hello world</h1>
      <button onClick={buttonClick}>Click me</button>
    </main>
  )
}

export default App
