import React, { Component } from 'react'
import countHOC from './countFunc'
class clickCounter extends Component {
  render=()=>{
    const {count, increment} = this.props
        return(
            <>
                <button onClick={increment}>Clicked {count} times by {this.props.name}</button>
            </>
        )
    }
}

export default countHOC(clickCounter, 5)