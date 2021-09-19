import React from 'react'



const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}
const Header = (course) => {
  return (
    <>
      <h1>{course.course.name}</h1>
    </>
  )
}

const Content = (parts) => {

  return (
    <>
      <Part part={parts.part[0]} />
      <Part part={parts.part[1]} />
      <Part part={parts.part[2]} />
    </>
  )
}

const Part = (partinfo) => {
  return (
    <>
      <p>{partinfo.part.name} {partinfo.part.exercises}</p>
    </>
  )
}

const Total = (parts) => {
  return (
    <>
      <p>Number of exercises {parts.total[0].exercises + parts.total[1].exercises + parts.total[2].exercises}</p>
    </>
  )
}


export default App