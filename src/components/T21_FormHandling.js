// in regular HTML, form elements such as <input>, <textarea>, and <select> have data availavble for form submission, element are responsibblt themselves.
// In react, we want react control form elements instead, such form elements whose value is controlled by react is called a controlled components.
// In a controlled component, form data is handled by a react component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
// a input element can have a value, its value can change based ont he user itneraction, for ex: a user typing in there email address
// <input type="text" value="Hello" onChange= />
// to deal with values that can change, we need to use state, setState, so we can use state to keep track of the value of the input field.
// so in controlled component, the value of the input field is set to the state property.
// <input type="text" value={this.state.name} onChange={this.handleChange} />
// handleChange = (e) => {
//   this.setState({    name: e.target.value    })
// }
// So there is a cycle of setting the inital value from the state, propagating the changed value to the state and then back to the input field.
// state object can be used to submit form data when ever needed
import React, { Component } from "react";

class T21_FormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react"
    };
  }
  handleUserNameChange = (event) => {
    console.log(event);

    this.setState({
      username: event.target.value,
    });
  };
  // handleComment = (event) => {  
  //   console.log(event.target.value);
  // }

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  }
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault(); // to avoid refresh, and prevent default behaviour of the form submission, andthe form data is not lost in the form.
  }
  render() {
    // destructure:
    const {username, comments, topic} = this.state;
    // remove this.state everywhere and use the destructured variables
    return (
      // <form>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          {/* <input type='text' value={this.state.username}/> */}
          {/* on typing input doesn't change, apply inChange handler */}
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          />
          {/* it just so happens that when u assignt eh handler to a onChange event, the event itself is passed as  a paramter  to the handler*/}
          {/* we are working with a controlled component and react state is a single source of truth for this input element */}
        </div>
        {/* <div>
            <label>Comments</label>
        <textarea onChange={this.handleComment}></textarea>
        </div> */}
        <div>
            <label>Comments</label>
        <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        {/* page refreshes on submit, page has default html form behaviour of browsing to a new page when the submit button is clicked, a formal approach is to have have a js function to handle submission, and that method will also have access to the data entered by the user*/}
      </form>
    );
  }
}

export default T21_FormHandling;
