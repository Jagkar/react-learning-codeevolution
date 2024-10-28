import React, { Component } from "react";
import T24_LifecycleB from "./T24_LifecycleB";

class T24_UpdatingLifecycleMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jagdeep",
    };
    console.log("Lifecycle A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    // has to return new state or null
    console.log("Lifecycle A getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle A componentDidMount");
    console.log("8888888888888888888888888888888888888");
  }
  shouldComponentUpdate(){
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null
  }
  componentDidUpdate(){
    console.log("Lifecycle A componentDidUpdate");
  }
  changeState=()=>{
    this.setState({
      name:'Jagdeep Kaur'
    })
  }
  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        <div>
          Lifecycle A
        </div>
        <button onClick={this.changeState}>Change state</button>
        <T24_LifecycleB/> {/*child component */}
      </div>
    );
  }
}

export default T24_UpdatingLifecycleMethods;
// to trigger these methods either we need to change state or props

// Lifecycle A getDerivedStateFromProps
// Lifecycle A shouldComponentUpdate
// Lifecycle A render
// Lifecycle B getDerivedStateFromProps
// Lifecycle B shouldComponentUpdate
// Lifecycle B render
// Lifecycle B getSnapshotBeforeUpdate
// Lifecycle A getSnapshotBeforeUpdate
// Lifecycle B componentDidUpdate
// Lifecycle A componentDidUpdate