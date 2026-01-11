import React, { useCallback, useEffect, useRef, useState } from 'react'

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const previousFunction = useRef(null)

  const expensiveCalculation = useCallback(() => {
    console.log("expensive calculation chal rahi hai")
    let result = 0
    for (let i = 0; i < 100000000; i++) {
      result += i
    }
    return result
  }, [count])

  useEffect(() => {
    if (previousFunction.current) {
        if (previousFunction.current === expensiveCalculation) {
            console.log("function not re-created")
        } else {
      console.log("function re-created")
        }
    }
    previousFunction.current = expensiveCalculation
    })

  const result = expensiveCalculation()

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="type something"
      />
    <br></br>
      <p>Expensive Calculation Result: {result}</p>
    <br></br>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  )
}

export default ExpensiveComponent
