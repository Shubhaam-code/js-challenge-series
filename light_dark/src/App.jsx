import { useState } from 'react'

import './App.css'
import { createContext } from 'react'
import ChildB from './components/ChildB'

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <div id='id' style={{backgroundColor:theme==="light"?"beige" :"black"}}>
  
     <ThemeContext.Provider value={{theme,setTheme}}> 
      <ChildB />
     </ThemeContext.Provider>
    </div>
  )
}

export default App
export {ThemeContext}
