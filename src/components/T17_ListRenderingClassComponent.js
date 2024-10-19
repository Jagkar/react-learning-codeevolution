import React, { Component } from "react";

class T17_ListRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          name: "Bruce",
          age: 30,
          skill: "React",
        },
        {
          id: 2,
          name: "Clark",
          age: 25,
          skill: "Angular",
        },
        {
          id: 3,
          name: "Diana",
          age: 28,
          skill: "Vue",
        },
      ],
    };
  }
  arr=[1,2,3];
  
  render() {
    let arr1 = [1, 2, 3];
    
    const personList = this.state.persons.map((person) => (
      <h2 key={person.id}>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
        {this.arr[1]}
        {arr1[1]}
      </h2>
    ));
    return <div>{personList}</div>;
  }
}

export default T17_ListRendering;