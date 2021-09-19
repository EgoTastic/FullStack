import React, {useState} from 'react'

const App = () => {


  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)


  const goodClick = () => {
    setGood(good + 1)
  }

  const badClick = () => {
    setBad(bad + 1)
  }

  const neutralClick = () => {
    setNeutral(neutral + 1)
  }


  return (
  <div>
    <h1>Give feedback!</h1>
    <Button clickHandler = {goodClick} text = 'good' />
    <Button clickHandler = {neutralClick} text = 'neutral' />
    <Button clickHandler = {badClick} text = 'bad' />
    <h1>Statistics</h1>

    <Statistics 
      good = {good}
      neutral = {neutral}
      bad = {bad} 
      />
  </div>
  )
}

const Button = ({clickHandler, text}) => {
  return (
    <button onClick = {clickHandler}>
      {text}
    </button>
  )
}


const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  const average = (good - bad) / total

  const positive = (good / total) + "%"

  if (total === 0) {
    return (
      <div>
        <div>No feedback given</div>
      </div>
      
    )
  }
  return (
    <div>
      <table>
        <tbody>
        <StatisticsLine text = "good" value = {good} />
        <StatisticsLine text = "neutral" value = {neutral} />
        <StatisticsLine text = "bad" value = {bad} />
        <StatisticsLine text = "all" value = {good + bad + neutral} />
        <StatisticsLine text = "average" value = {average} />
        <StatisticsLine text = "positive" value = {positive} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

  )
}


export default App;
