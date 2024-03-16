import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    increment(){
        this.setState((prevState) => (
            {
                count: prevState.count + 1
            }
            ), ()=> console.log(`the currrent setState count value is: ${this.state.count}`)
        )
        console.log(`the previous setState value is: ${this.state.count}`)
    }
    incrementFiveTimes(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=>this.incrementFiveTimes()}>Count</button>
            </div>
        )
    }
}
export default Counter