import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function Element(){
  return (
    <h1>Hello world</h1>
  )
}

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'click here'
)



ReactDOM.createRoot(document.getElementById('root')).render(
    Element()
)
