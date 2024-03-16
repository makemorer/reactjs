import React, {PureComponent, Fragment} from 'react'
import FRInput from './FRInput'
 
class FRParent extends PureComponent{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }
    clickHandler = ()=>(
        this.inputRef.current.focus()
    )
    render=()=>(
        <Fragment>
            <FRInput ref={this.inputRef}/>
            <button onClick={this.clickHandler}>Focus Input</button>
        </Fragment>
    )
}
export default FRParent