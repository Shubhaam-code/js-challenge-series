import { useState } from 'react'

import './App.css'
import { useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [input,setInput] = useState(0);

  function expensive(n) {
    console.log("hello")
    for(let i=0;i<1000000000;i++){
      
    }
    return n*2
  }

  let doublevalue = useMemo(()=>expensive(input),[input])


  return (
    <div id="container">
      <button onClick={()=>setCount(count+1)}>Increament</button>
      
      <div>
        Count:{count}
      </div>
      <div>
        Double:{doublevalue}
      </div>
      
      <input 
        type='text'
        placeholder='enter number'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
    </div>
  )
}

export default App
