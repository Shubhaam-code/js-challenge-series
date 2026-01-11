import { useState } from 'react'

import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  let id =useRef(null)
  function start(){
     
    id.current=setInterval(
      ()=>setCount(prev => prev + 1)
      ,1000)
  }
   function stop(){
    clearInterval(id.current)
    id.current=null
  }

  function reset(){
    stop()
    setCount(0)
  }


  return (
    <div id="container">
      <h1>COUNT : {count}</h1>
      <button onClick={start}>START</button>
      <button onClick={stop}>STOP</button>
      <button onClick={reset}>RESTART</button>
     
    </div>
  )
}

export default App
