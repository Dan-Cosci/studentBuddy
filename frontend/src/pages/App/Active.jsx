import React, { useState } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Active = () => {
  const [value, setValue] = useState('# Markdown Editor');
 

  return (
  <div className="editor-layout">
    <textarea
      className="editor-layout__editor"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Start writing your markdown here..."
      autoFocus
    >
      {value}
    </textarea>
    <div className="editor-layout__preview">
      <Markdown remarkPlugins={[remarkGfm]}>
        {value}
      </Markdown>
    </div>
  </div>
  )
}

export default Active