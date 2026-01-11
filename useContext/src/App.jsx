import { createContext, useState } from 'react'

import './App.css'
import ChildA from './components/ChildA'
// create usercontext
const userContext = createContext()
function App() {
  const [user, setUser] = useState({
    name: "Shubham",
    age: 22,
    email: "shubham@gmail.com",
    isLogin: true
  })
  
  
  return (
    <div id='id'>
      {/* childA is provider, provider pass the value   */}
      <userContext.Provider value={user}>
        <ChildA />
      </userContext.Provider>
    </div>
  )
}

export default App
export { userContext }
