import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './Context'
class ComponentB extends Component {
    static contextType = UserContext
  render() {
    return (
        <>
            ComponentB context is {this.context}
            <ComponentC />
        </>
      
    )
  }
}
// ComponentB.contextType = UserContext
export default ComponentB