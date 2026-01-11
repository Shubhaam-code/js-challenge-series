import { useEffect, useRef, useState } from "react";
import "./App.css"


function App() {

    let [count,setCount] = useState(0)
    
    let val=useRef(0)
    let btn = useRef(null) 

    function handlefuction(){

     
      val.current=val.current+1
      console.log(val.current)
      setCount(count+1)
    }
    function handlecolor() {
      btn.current.style.background="red"
      
    }

    useEffect(()=>{
      console.log("render hu mai")
    })
  return (
   <div id="container">
      <button ref={btn} onClick={handlefuction}>INCREMNET</button>
      <button  onClick={handlecolor}>CHANGE COLOUR OF INCREMNET</button>
      <h3>Count:{count}</h3>
   </div>
  )
}

export default App
