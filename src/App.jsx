import React from "react"
import { useState } from "react"
import Statistics from "./Statistics"
import StatisticsLine from "./StatisticsLine"


const Button = (props) => {
  return (
    <button onClick={props.handleClick} >{props.text}</button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const positive = (total === 0 ? 0 : (good / total * 100).toFixed(2))


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

      <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positive={positive}
      />
      
    </div>
  )
}
export default App
