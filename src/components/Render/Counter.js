import React, {PureComponent, Fragment} from 'react'

class Counter extends PureComponent{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment=()=>(
        this.setState(
            (prevState)=>(
                {
                    count: prevState.count + 1
                }
            )
        )
    )
    render=()=>(
        <Fragment>
            {this.props.children(this.state.count, this.increment)}
        </Fragment>
    )
}
export default Counter