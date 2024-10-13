import React, { Component } from "react";

class T10_Message extends Component{
    constructor(){
        super(); // because we extend Component class
        this.state={
            // state is a reserved keyword
            message:'Welcome visitor'
        }
    }
    changeMessage(){
        // setState fn accepts new state
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    render(){
        return <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>;
    }
}

export default T10_Message;