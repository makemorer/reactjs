import React, {useState, useEffect} from 'react'

function HookPosition() {
    let [x, setX] = useState(0)
    let [y, setY] = useState(0)

    const logMousePosition = (event)=>{
        setX(
            ()=>(
                x = event.clientX
            )
        )
        setY(
            ()=>(
                y= event.clientY
            )
        )
    }

    useEffect(
        ()=>{
            //componentDidMount & componentDidUpdate: use for effect and automatic events
            window.addEventListener('mousemove', logMousePosition)

            //componentWillUnmount
            return(
                ()=>{
                    window.removeEventListener('mouseover', logMousePosition)
                }
            )
        }, []//run the useEffect only once and ignore changes
    )
  return (
    <div>
        X position - {x} | Y position - {y}
    </div>
  )
}

export default HookPosition