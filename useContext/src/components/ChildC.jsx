import React, { useContext } from 'react'
import { userContext } from '../App'
const ChildC = () => {
    // consumer will take data
    let user = useContext(userContext)
  return (
    <div>
      Name :{user.name}
      <br></br>
      Age :{user.age}
    </div>
  )
}

export default ChildC
