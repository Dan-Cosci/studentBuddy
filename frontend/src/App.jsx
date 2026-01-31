import React from 'react'
import "./assets/scss/main.scss"

import MainRouter from './routes/Main.routes.jsx'

const App = () => {

  return (
    <>
      <main className="main">
        <MainRouter />
      </main>
    </>
  )
}

export default App
