import React from "react";

function T17_ListRendering() {
  //     const names=['Bruce','Clark','Diana']

  //     const nameList=names.map(name=><h2>{name}</h2>)
  //   return (
  //     <div>
  //         {/* <h2>{names[0]}</h2>
  //         <h2>{names[1]}</h2>
  //         <h2>{names[2]}</h2> */}
  //         {/* {
  //             names.map(name=><h2>{name}</h2>)
  //         } */}
  //         {nameList}
  //     </div>
  //   )
  const persons = [
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
  ];
  const personList = persons.map((person) => (
    <h2>
      I am {person.name}. I am {person.age} year old. I know {person.skill}
    </h2>
  ));
  return <div>
        {personList}
  </div>;
}

export default T17_ListRendering;
// refactor jsx into a separte component 

// write the above code for class component