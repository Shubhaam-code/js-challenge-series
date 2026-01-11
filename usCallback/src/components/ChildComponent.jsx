import React from 'react'

const ChildComponent = React.memo(
    (props) => {
       console.log("child render hua hai")
        return (
        <div>
            <button>{props.name}</button>
        </div>
        )
    }
)

export default ChildComponent


// React.memo ---> jab tab props.name ki value change nhi hogi tab hi re render hoga
// function agar pass kiye to ye work nhi karta ha 
