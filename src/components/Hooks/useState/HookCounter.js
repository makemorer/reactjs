import React, {useState} from 'react'

const HookCounter = ({initial})=>{
    const [count, setCount] = useState(initial)

    const increaseByFive=()=>{
        let arr = [1,2,3,4,5]
        for (let i of arr){
            setCount(
                (prevCount)=>(
                    prevCount + 1
                )
            )
        }
    }

    return (
        <React.Fragment>
            Count : {count}
            <button onClick={()=>setCount((prevCount)=>(prevCount + 1))}>Increment</button>
            <button onClick={()=>setCount((prevCount)=> (prevCount - 1))}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={increaseByFive}>Increase by 5</button>
        </React.Fragment>
    )
}
export default HookCounter