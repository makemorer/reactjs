import React, {useReducer} from 'react'

export default function HookReducer(){
    //newState = initialState = currentState
    const initialState = 0
    const reducer = (currentState, action)=>{
        switch(action){
            case 'increment':
            return currentState + 1
            case 'decrement':
                return currentState -1
            case 'reset':
                return initialState
            default:
                return currentState
        }
    }
    const [newState, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            <h2>Count: {newState}</h2>
            <button onClick={()=> dispatch('increment')}>increment</button>
            <button onClick={()=> dispatch('decrement')}>decrement</button>
            <button onClick={()=> dispatch('reset')}>reset</button>
        </>
    )
}