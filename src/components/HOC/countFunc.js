import React, {Component} from 'react'

const countHOC = (WrappedComponent, increment) =>(
    class UpdatedComponent extends Component{
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
                        count: prevState.count + increment
                    }
                )
            )
        )
        render = ()=>(
            <WrappedComponent count={this.state.count} increment={this.increment} {...this.props}/>
        )
    }
)
export default countHOC