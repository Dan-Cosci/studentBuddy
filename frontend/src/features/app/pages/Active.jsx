import React from 'react';
import { useParams } from 'react-router-dom';
import Markdown from '../components/Markdown';
import useAppStore from '../useAppStore';
import './active.scss'


const Active = () => {
  const {id} = useParams();
  const { notes } = useAppStore();

  const activeNote = notes.find(note => note._id === id);

  return (
    <div className='active'>
      <Markdown content={activeNote.content} />
    </div>
  )
}

export default Active