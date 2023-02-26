import React from "react"
import anecdotes from "./anecdotes"
import { useState } from 'react'


const App = () => {

  const [selected, setSelected] = useState(anecdotes[0])
  const [votes, setVotes] = useState(selected)

  const randomAnecdote = () => {

    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    const anecValue = anecdotes[randomNumber]
    setSelected(anecValue)
    
  }
  const vote = () =>  {
    const copy = { ...selected}
    selected.count += 1
    setVotes(copy)
  }
  console.log(votes)
  return (
    <div>
      {`${selected.value}`}
      <br />
      <button onClick={vote} >vote</button>
      <button onClick={randomAnecdote}>Random anecdote</button>
    </div>
  )
}

export default App