import React from 'react'
import "./assets/css/style.css"

import instance from './services/api.service.js'

const App = () => {

  const buttonClick = () => {
    instance.get('/notes/').then((res) => {
      console.log(res)
    })
  }
  
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={buttonClick}>Click me</button>
    </div>
  )
}

export default App
