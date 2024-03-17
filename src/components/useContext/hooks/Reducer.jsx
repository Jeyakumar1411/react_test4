import React from 'react'
import { useReducer } from 'react'


    const initialState = 0

    const reducer = (currentState, action) => {

        if (action === "Increment"){
            return currentState + 1
        }

        else if (action === "Decrement"){
            return currentState -1
        }

        else if (action === "Reset"){
            return initialState
        }

        else {
            return currentState
        }

    }

const Reducer = () => {

        const [count, dispatchCount] = useReducer(reducer, initialState)

  return (
    <div>
        <h1>count : {count}</h1>
        <button className='btn btn-success m-2' onClick={() => dispatchCount("Increment")}>Increment</button>
        <button className='btn btn-danger m-2' onClick={() => dispatchCount("Decrement")}>Decrement</button>
        <button className='btn btn-primary m-2' onClick={() => dispatchCount("Reset")}>Reset</button>
        <button onClick={() => dispatchCount("i")}></button>
    </div>
  )
}

export default Reducer