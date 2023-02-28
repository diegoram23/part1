import React, { useState } from 'react'
import notes from './notes,jsx'
import Note from './components/Note'

const App = () => {

  const notesElements = notes.map(note =>
    <Note
      key={note.id}
      content={note.content}
      important={note.important}
    />
  )

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesElements}
      </ul>
    </div>
  )
}

export default App