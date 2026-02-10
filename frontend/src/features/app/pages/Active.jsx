import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Markdown from '../components/Markdown'
import useAppStore from '../useAppStore'
import './active.scss'
import Loading from '../../Loading'

const Active = () => {
  const { id } = useParams()
  const notes = useAppStore(state => state.notes)
  const [activeNote, setActiveNote] = useState(null)

  useEffect(() => {
    if (!notes.length || !id) return

    const note = notes.find(note => note._id === id)
    setActiveNote(note || null)
  }, [id, notes])

  const handleSave = () => {
    console.log('save note')
  }

  return (
    <div className="active" onBlur={handleSave}>
      {activeNote ? (
        <Markdown content={activeNote.content} />
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default Active
