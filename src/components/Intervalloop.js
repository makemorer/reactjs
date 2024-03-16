import React from 'react'

const IntervalLoop =()=>{
    setInterval(
        ()=>(
            console.log(`Looping`)
        ), 5000
    )
    return(
        <><h1>Looping</h1></>
    )
}
export default React.memo(IntervalLoop)