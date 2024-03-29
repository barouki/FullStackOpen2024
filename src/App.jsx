const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part = {props.content[0][0]} exercises = {props.content[0][1]}/>
      <Part part = {props.content[1][0]} exercises = {props.content[1][1]}/>
      <Part part = {props.content[2][0]} exercises = {props.content[2][1]}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises.reduce((acc, curr) => acc + curr, 0)}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content content={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]}  />
      <Total exercises={[exercises1, exercises2, exercises3]}  />
    </>
  )
}

export default App