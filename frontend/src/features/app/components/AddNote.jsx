import React from 'react'
import './AddNote.scss'

import { IoAddCircleOutline } from 'react-icons/io5';


const AddNote = () => {
  return (
    <div className="addnote-card">
      <div className="addnote-icon">
        <IoAddCircleOutline />
      </div>
      <p>Add Note</p>
    </div>
  )
}

export default AddNote