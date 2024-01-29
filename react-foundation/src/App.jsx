import { useState } from 'react'
import Chai from './chai'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React app</h1>
      <Chai/>
    </>
  )
}

export default App
