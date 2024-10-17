import React, { Component } from 'react'

class T15_UnderstandingComponentsRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        first:'hello',
        second:'hi'
      }
    //   this.array=['eat','code','sleep','repeat'];
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
    array=['eat','code','sleep','repeat'];
    func3=()=>{
        console.log(this.array);
        
        // let s="";
        // this.array.forEach(element => {
        //     s+="<div>"+element+"</div>"
        // });
        // return s;
        // Return an array of JSX elements
        // let a=this.array.map((element, index) => (
        //     <div key={index}>{element}</div>
        // ));
        // console.log(a);
        
        return this.array.map((element, index) => (
            <div key={index}>{element}</div>
        ));
    }
  render() {
    return (
      <div>
        <div>{this.state.first}</div>
        <button onClick={this.func1}>Click</button>
        <div>{this.state.second}</div>
        <button onClick={this.func2}>Click me</button>
        <div>{this.func3()}</div>
      </div>
    )
  }
}

export default T15_UnderstandingComponentsRendering