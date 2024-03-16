import React, {Component} from 'react'
import ChildComponent from './Child'

class Parent extends Component{
    constructor(){
        super()
        this.state = {
            message: "The great developer @ Canionical"
        }
    }
    greetParent = (namer) =>(
        alert(`Hello ${namer}, ${this.state.message}`)
    )
    render = () => (
        <div>
            <ChildComponent greetHandler={this.greetParent}/>
        </div>
    )
}
export default Parent