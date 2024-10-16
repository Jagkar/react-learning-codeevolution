// We bind event handler in react is becauseof the way this keyword works in js
// it is not because of how react works
import React, { Component } from 'react'

class T14_BindingEventHandlers extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
      this.clickHandler=this.clickHandler.bind(this);
    }
    // clickHandler(){
    //     // this.setState({
    //     //     message:'GoodBye'
    //     // })

    //     // this keyword inside event handler is undefined, so event binding is necessary in react class component
    //     console.log(this);
    // }

    // clickHandler(){
    clickHandler=()=>{
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
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
      </div>
    )
  }
}

export default T14_BindingEventHandlers
// Ways to bind:
// 1. Binding in render method:
// onClick={this.clickHandler.bind(this)}
// now this keyword refers to the event bind component instance
// this is ok, but every update to the state will cause the component to rerender, this will generate a brand new event handler on every render, impact is not severe in small applications, but could be troublesome in large applications and components that contain nested children components

// 2. arrow functions in render method:
// onClick={()=>this.clickHandler()}
// we are calling the event handler and returning the value, ok, but still performance issues
// use if no renderning of nested children components

// 3. 
// this.clickHandler=this.clickHandler.bind(this);
// binding the event handler in the constructor as opposed to binding in the render method
// becaus ethe binding happens once in the constructor, this is better than binding in the render method.

// 4. arrow function as a class property
// clickHandler=()=>{}