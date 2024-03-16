import React, {Component} from 'react'

class Conditions extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    render = () => (
        // let message
        // if(this.state.isLoggedIn){
        //     message = <h1>Welcome Ubong</h1>
        // }else{
        //     message = <h1>Welcome Guest</h1>
        // }
        // return <div>{message}</div>
        // !this.state.isLoggedIn && <div>Welcome Ubong</div>
        this.state.isLoggedIn ? <div>Welcome Ubong</div> : <div>Welcome Guest</div>
    )
}
export default Conditions