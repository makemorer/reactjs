import React, {useState} from 'react'
import HookPosition from './HookPosition'

const MouseEffect =()=>{
    let [display, setDisplay] = useState(true)

    const clickHandler = ()=>(
        setDisplay(
            ()=>(
                display = !display
            )
        )
    )
    return(
        <React.Fragment>
            <button onClick={clickHandler}>Toggle display</button>
            {display && <HookPosition />}
        </React.Fragment>
    )
}
export default MouseEffect