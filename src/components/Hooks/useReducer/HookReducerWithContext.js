import React, {useReducer} from 'react'
import ComponentA from './ComponentA'

export const CountContext = React.createContext()

//create context, provider context value

//share context value to ComponentA

//create a state using useReducer

//share the state using context

export default function HookReducerWithContext(){
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

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <React.Fragment>
                <h4>count: {count}</h4>
                <ComponentA />
            </React.Fragment>
        </CountContext.Provider>
    )
}
