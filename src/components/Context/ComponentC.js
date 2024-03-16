import React, { Component } from 'react'
import UserContext from './Context'
class ComponentC extends Component {
  render() {
    return (
        <UserContext.Consumer>
            {(username)=>(
                <>Hello {username}</>
            )}
        </UserContext.Consumer>
    )
  }
}

export default ComponentC