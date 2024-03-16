import React, {PureComponent, Fragment} from 'react'

class Form extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            username: ""
        }
        this.inputRef = React.createRef()
    }
    inputHandler = (event)=>(
        this.setState(
            ()=>(
                {
                    username: event.target.value
                }
            )
        )
    )
    clickHandler = ()=>(
        alert(`username is: ${this.state.username}`)
    )
    componentDidMount(){
        this.inputRef.current.focus()
    }
    render =()=>(
        <Fragment>
            <form>
                <fieldset>
                    <legend>Controlled Component</legend>
                    <label>Username:</label>
                    <input type="text" value={this.state.username} onChange={this.inputHandler} ref={this.inputRef}/>
                    <button type="submit" onClick={this.clickHandler}>Submit</button>
                </fieldset>
            </form>
        </Fragment>
    )
}
export default Form