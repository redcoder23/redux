import { useState } from 'react'
import './App.css'
import Addtodo from './Components/Addtodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Learn about redux toolkit </h1>
    <Addtodo></Addtodo>
    <Todo></Todo>
    </>
  )
}

export default App
