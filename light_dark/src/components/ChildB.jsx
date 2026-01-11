import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import './ChildB.css'
const ChildB = () => {
    
    const {theme,setTheme} = useContext(ThemeContext)
    const toggleTheme =()=>{
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
  return (
    <div>
        <button  id='btn' onClick={toggleTheme}>Change Color</button> 
        
    </div>
  );
}

export default ChildB;
