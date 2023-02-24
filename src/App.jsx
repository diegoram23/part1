import React from "react"
import { useState } from "react"



const Button = (props) => {
  return (
    <button onClick={props.handleClick} >{props.text}</button>
  )
}

const Positive = (props) => {
return (
  props.total === 0 ? 0 : (props.good/props.total * 100).toFixed(2)
)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
}

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (

    <div>
      <h2>give feedback</h2>
      <Button handleClick={increaseGood} text='Good' />
      <Button handleClick={increaseNeutral} text='Neutral' />
      <Button handleClick={increaseBad} text='Bad' />

      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>positive <Positive good={good} total={total}/>% </p>
    </div>
  )
}
export default App
