import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  const addCounter=()=>{
    if(counter == 20 ) return
    setCounter(++counter)
  }
  const removeCounter=()=>{
    if(counter == 0) return
    setCounter(--counter)
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addCounter}>Add Value</button> <br /><br />
      <button onClick={removeCounter}>remove value</button>
    </>
  )
}

export default App
