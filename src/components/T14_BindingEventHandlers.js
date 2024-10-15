// We bind event handler in react is becauseof the way this keyword works in js
// it is not because of how react works
import React, { Component } from 'react'

class T14_BindingEventHandlers extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    }
    // clickHandler(){
    //     // this.setState({
    //     //     message:'GoodBye'
    //     // })

    //     // this keyword inside event handler is undefined, so event binding is necessary in react class component
    //     console.log(this);
    // }
    clickHandler(){
        this.setState({
            message:'GoodBye'
        })
        console.log(this);
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default T14_BindingEventHandlers
// Ways to bind:
// 1. Binding in render method: onClick={this.clickHandler.bind(this)}
// now this keyword refers to the event bind component instance
