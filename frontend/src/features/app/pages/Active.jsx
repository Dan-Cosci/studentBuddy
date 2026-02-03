import React from 'react'
import Markdown from '../components/Markdown';
import '@mdxeditor/editor/style.css';
import './active.scss'


const Active = () => {
  

  return (
    <div className='active'>
      <Markdown />
    </div>
  )
}

export default Active