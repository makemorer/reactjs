import React, {useContext, Fragment} from 'react'
import { CountContext } from './HookReducerWithContext'

function ComponentC() {
const countContext = useContext(CountContext)
  return (
    <Fragment>
        <h2>count: {countContext.countState}</h2>
        <button onClick={()=>countContext.countDispatch('increment')}>increase</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>decrease</button>
        <button onClick={()=>countContext.countDispatch('reset')}>reset</button>
    </Fragment>
  )
}

export default ComponentC