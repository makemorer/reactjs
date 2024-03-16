import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }

    tick=()=(
        this.setState(
            (prevState)=>(
                {
                    count: prevState + 1
                }
            )
        )
    )
    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render() {
    return (
      <div>IntervalClassCounter</div>
    )
  }
}

export default IntervalClassCounter