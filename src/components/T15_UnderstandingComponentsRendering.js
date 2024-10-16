import React, { Component } from 'react'

class T15_UnderstandingComponentsRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        first:'hello',
        second:'hi'
      }
    }
    func1=()=>{
        this.setState({
            second:'Good morning'
        })
    }
    func2=()=>{
        this.setState({
            first:'Good Evening'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.first}</div>
        <button onClick={this.func1}>Click</button>
        <div>{this.state.second}</div>
        <button onClick={this.func2}>Click me</button>
      </div>
    )
  }
}

export default T15_UnderstandingComponentsRendering