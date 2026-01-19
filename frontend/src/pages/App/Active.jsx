import React, { useState } from 'react'
import Markdown from '../../components/Markdown';

const Active = () => {
  const [value, setValue] = useState('# Markdown Editor');
 

  return (
    <div className='active'>
      <Markdown />
    </div>
  )
}

export default Active