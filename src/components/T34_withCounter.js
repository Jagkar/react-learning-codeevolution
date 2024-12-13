import React from "react";

// const withCounter = (OriginalComponent) => {
const withCounter = (WrappedComponent) => {
    // create a component to return
    class WithCounter extends React.Component{
        constructor(props) {
            super(props);
        
            this.state = {
              count: 0,
            };
          }
        
          incrementCount = () => {
            this.setState((prevState) => {
              return { count: prevState.count + 1 };
            });
          };
        render(){
            // return <OriginalComponent name='Jagdeep'/>
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return WithCounter
}
export default withCounter