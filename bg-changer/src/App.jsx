import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex felx-wrap px-2 py-2 rounded-full shadow-lg bg-white justify-center gap-1">
          <button onClick={()=> setColor("red")} className="outline-none px-4 font-bold shadow-lg text-white rounded-full" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=> setColor("green")} className="outline-none px-4 font-bold shadow-lg text-white rounded-full" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=> setColor("blue")} className="outline-none px-4 font-bold shadow-lg text-white rounded-full" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=> setColor("black")} className="outline-none px-4 font-bold shadow-lg text-white rounded-full" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={()=> setColor("white")} className="outline-none px-4 font-bold shadow-lg bg-white text-black rounded-full" style={{backgroundColor: "white"}}>White</button>
          <button onClick={()=> setColor("yellow")} className="outline-none px-4 font-bold shadow-lg text-black rounded-full" style={{backgroundColor: "yellow"}}>Yellow</button>
        </div>
      </div>

    </>
  )
}

export default App
