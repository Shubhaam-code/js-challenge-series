import { useCallback, useState } from 'react'
// import ChildComponent from "./components/ChildComponent"
import './App.css'
import ExpensiveComponent from './components/ExpensiveComponent'

function App() {

  // const [count, setCount] = useState(0)

  // const handleclick = useCallback( () => {
  //   setCount(count+1)
  //   },[count]) // count update hoga function wapas se create hoga

  return (
    <div id='container'>
      {/* <div id='container'>
        Count : {count}
        <button onClick={handleclick}>INCREMENT</button>
      </div>

      <div>
        <ChildComponent name="CLICK ME" function={handleclick}/>
      </div> */}

      <ExpensiveComponent />
    </div>
  )
}

export default App
