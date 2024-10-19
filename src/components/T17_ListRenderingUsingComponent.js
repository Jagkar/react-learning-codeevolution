import React from "react";
import T17_Person from "./T17_Person";

function T17_ListRenderingUsingComponent() {
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
    <T17_Person person={person} group='teen'/>
  ));
  return <div>{personList}</div>;
}

export default T17_ListRenderingUsingComponent;
