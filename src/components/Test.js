import React, {Component} from 'react'

class Test extends Component {
    constructor(){
        super()
        // create state
        this.state = {
            message: "Welcome Visitor"
        }
        // this.changeMessage = this.changeMessage.bind(this)
    }
    // changeMessage(){
    //     // set state
    //     this.setState(
    //         ()=>(
    //             {
    //                 message: "Thankyou for subscribing"
    //             }
    //         )
    //     )
    //     // console.log("Button Clicked")
    // }
    changeMessage = () => (
        this.setState(
            ()=>(
                {
                    message: "Thankyou for subscribing"
                }
            )
        )
    )
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Subscribe</button>
            </div>
        )
    }
}
export default Test