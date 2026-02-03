import React from 'react'
import { Link } from 'react-router-dom'
import './landing/pages/404.scss'

const Page404 = () => {
  return (
    <>
      <content className="error-page">

        <img src="./src/assets/images/img404.png" alt="" />
        <h2 className="error-page__title">Well this is akward...</h2>
        <p className="error-page__message">
          The page you're looking for doesn't exist.
          Either it moved, <br />never existed, or you tried to be a hackerman 687.
        </p>
        <p className="error-page__hint">
          Don’t worry, it happens to the best of us.
          <br />
          (Okay, maybe not the <em>best</em> of us.)
        </p>
        <div className="error-page__actions">
          <Link to="/" className="error-page__actions__btn">Country Roads, TAKE ME HOME</Link>
          <Link to="/login" className="error-page__actions__btn scdry">I am here, let's login</Link>

        </div>

      </content>
    </>
  )
}

export default Page404