import React, { Component } from 'react'

class T11_Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        // this.state.count=this.state.count+1;
        // console.log(this.state.count);
        // // it increase in console but not in UI
        // // UI is not rerendering whenever the state is changig, so we should never modify the state directly
        // // the only place where u can assign this.state is constructor, else use setState method

        // with setState react will know when to rerender the component
        // this.setState({
        //     count:this.state.count+1
        // })
        // console.log(this.state.count);

        // but now in UI the value is increasing but in console it is still previous value
        // it is 1 less in the console
        // because the calls to setState are asynchronous
        // to execute code only after the state has been updated, pass a call back function as 2nd paramter to the setState Method
        //  setState(state object, call back fucntion(arrow function))
        this.setState(
            {
                count: this.state.count + 1
            },
            () => {
                console.log('Callback value ',this.state.count)
            }
        )
        console.log(this.state.count);
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        // the value change to 1 and in console it is printing 5 times. but not increasing 5 times.
        // first 0 is printed 5 times then callback value 1 is printed 5 times
        // React may group multiple setState calls into a single update for the better performance
        // all 5 calls go in one go, and updated  value don't 
    }
    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                {/* <button onClick={() => this.increment()}>Increment</button> */}
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default T11_Counter