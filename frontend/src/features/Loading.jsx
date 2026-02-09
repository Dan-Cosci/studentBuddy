import React from 'react'
import './Loading.scss'

const Loading = () => {
  return (
    <>
      <div className="loader">
        <div className="loader__container">
          <div className="loader__circle"></div>
          <div className="loader__circle"></div>
          <div className="loader__circle"></div>
          <div className="loader__circle"></div>
          <div className="loader__circle"></div>
        </div>
      </div>
    </>
  )
}

export default Loading