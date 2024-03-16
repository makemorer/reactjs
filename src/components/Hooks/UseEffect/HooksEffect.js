import React, {useState, useEffect} from 'react'

const HooksEffect = () =>{
    const [count, setCount] = useState(0)

    const increment = () =>(
        setCount(
            (prevCount)=>(
                prevCount + 1
            )
        )
    )
    
    useEffect(
        ()=>{
            document.title = `You clicked ${count} times`
        }, [count]//no need for [count] because am using prevCount format
    )

    return(
        <>
            <button onClick={increment}>clicked {count} times</button>
        </>
    )
}
export default HooksEffect