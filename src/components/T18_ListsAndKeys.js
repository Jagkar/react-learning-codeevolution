// each child in an array or iterator should have a unique "key" prop
// each item rendered using map operator should have key prop, and value to the prop should be unique within the list
// key prop is used by react to identify which items have changed, are added or removed
// key prop should be unique, stable and should not change over time
// key prop is not accessible in child component
// `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop.
// key prop is something react eneds to render the list efficiently, if u want to pass the value use different prop

import React from "react";
import T17_Person from "./T17_Person";

function T18_ListsAndKeys() {
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
    <T17_Person key={person.id} person={person} group="teen" />

    // Encountered two children with the same key, `as`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted
    // <T17_Person key="as" person={person} group='teen'/>
  ));
  return <div>{personList}</div>;
}

export default T18_ListsAndKeys;
// id of the item is a great choice for the value of key

// when we add to list, react iterate through both list, and generate a mutation whenever there is a difference
// so it will simply inser teh third item into the list

// when we want to insert at top, react will compare and find all the items different, and react will end up mutating every child instead. So to solve this issue react use key attribute.
// react uses key to match children in teh original children in the sub sequent tree

// A "key" is a special string attribute you need to include when creating lists of elements.
// Keys give the elements a stable identity.
// Keys help React identify which items have changed, are added, or are removed.
// Help in efficient update of the user interface.