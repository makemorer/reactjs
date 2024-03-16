import React, {useState, useEffect} from 'react'

const IntervalCounter = ()=>{
    const [count, setCount] = useState(0)

    const tick=()=>(
        setCount(
            (prevCount)=>(
                prevCount + 1
            )
        )
    )
    useEffect(
        ()=>{
            //componentDidMount
            const interval = setInterval(tick, 1000)
            return(
                ()=>(
                    //componentWillUnmount
                    clearInterval(interval)
                )
            )
        }, []
    )
    return(
        <>
            <h3>{count}</h3>
        </>
    )
}
export default IntervalCounter