import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let string = "ABCDEFGHIJJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) string += "0123556789";
    if(charAllowed) string += "~!@#$%^&*()_+:;?|`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char);
    }
    setPassword(pass);
  },[length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[charAllowed,length,numberAllowed,passwordGenerator])

  const passwordRef = useRef(null)
  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center">
        <h1 className='text-white text-center my-3 font-bold'>Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0 5 shrink-0">copy</button>
        </div>
        <div className="flex gap-x-2 text-sm flex-wrap">
          <div className="flex items-center gap-x-1 flex-wrap">
            <input 
            type="range"
            min={8}
            max={50}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            className='cursor-pointer'
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="noInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
            className='cursor-pointer'
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="noInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            className='cursor-pointer'
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
