import React from 'react'
import useAppStore from '../useAppStore'
import './Dashboard.scss'
import Dashcard from '../components/Dashcard';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { notesRender } = useAppStore();
  const navigate = useNavigate();


  const handleClick = (e) => {
    console.log(e);
    return navigate(`/app/note/${e}`);
  }


  return (
    <>
      <div className="card-ct">
        {notesRender.map((note) => (
          <Dashcard
            key={note._id}
            title={note.title}
            content={note.content}
            createdAt={note.createdAt}
            updatedAt={note.updatedAt}
            onClick={()=>handleClick(note._id)}
          />
        ))}
      </div>
    </>
  )
}

export default Dashboard