import React, { Component } from "react";
import T23_LifecycleB from "./T23_LifecycleB";

class T23_ComponentMountingLifecycleMethods extends Component {
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
  }
  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        <div>
          Lifecycle A
        </div>
        <T23_LifecycleB/> {/*child component */}
      </div>
    );
  }
}

export default T23_ComponentMountingLifecycleMethods;

// In React, double logging is often caused by React's Strict Mode, which intentionally runs certain lifecycle methods twice in development to help identify side effects. This only happens in development mode and specifically affects functions or components that might rely on useEffect or similar lifecycle behaviors. If you're seeing double logs in production, it's likely due to a different issue.

// Lifecycle A constructor
// Lifecycle A getDerivedStateFromProps
// Lifecycle A render
// Lifecycle B constructor
// Lifecycle B getDerivedStateFromProps
// Lifecycle B render
// Lifecycle B componentDidMount
// Lifecycle A componentDidMount