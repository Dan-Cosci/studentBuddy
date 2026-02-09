import React from 'react'
import './Dashcard.scss'



const Dashcard = (prop) => {
  const {title, content, createdAt, updatedAt, onClick} = prop;
  console.log(title, content, createdAt, updatedAt);

  return (
    <div className="dashcard" onClick={onClick}>
      <h4 className="dashcard__title">{title}</h4>
      <p className="dashcard__content">{content}</p>
      <div className="dashcard__footer">
        <p className="dashcard__footer__date">Created: {new Date(createdAt).toLocaleDateString()}</p>
        <p className="dashcard__footer__date">Last updated: {new Date(updatedAt).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default Dashcard