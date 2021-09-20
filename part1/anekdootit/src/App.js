import React, {useState} from 'react'

const App =() => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints]= useState(new Uint8Array(7))

  const randomize = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  const voteAnec = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p><Statistic points = {points[selected]} /></p>
      <Button clickHandler = {voteAnec} text = 'vote' />
      <Button clickHandler = {randomize} text = 'next anecdote' />
      <h1>Anecdote with most votes</h1>
      <p><Winner anecdotes = {anecdotes} points = {points}/></p>
    </div>
  )

}

const Winner = ({anecdotes, points}) => {
  const winningPoints = Math.max(...points)
  const winner = anecdotes[points.indexOf(winningPoints)]


  if (winningPoints === 0) {
    return (
      <>
        No votes yet
      </>
    )
  }

  return (
    <>
    {winner}
    <Statistic points = {winningPoints} />
    </>
  )
}

const Statistic = ({points}) => {
  return (
    <>
      has {points} votes
    </>
  )
}

const Button = ({clickHandler, text}) => {
  return (
    <button onClick = {clickHandler}>
      {text}
    </button>
  )
}


export default App