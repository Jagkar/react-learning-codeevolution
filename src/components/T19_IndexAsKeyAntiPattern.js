// WHne we dont have id
import React from "react";
import T17_Person from "./T17_Person";

function T19_IndexAsKeyAntiPattern() {
  const names = ["Bruce", "Clark", "Diana","Bruce"];
  const nameList = names.map((name,index) => (
    // <h2 key={name}>{name}</h2>
    <h2 key={index}>{index} {name}</h2>
  ));
  return <div>{nameList}</div>;
}

export default T19_IndexAsKeyAntiPattern;
// map method receive a second paramter which is index
// but using index as key causes certain ui issues
// https://codepen.io/gopinav/pen/gQpepq
// here problem comes

/* <ul>
    <li key="0">1</li>
    <li key="1">2</li>
    <li key="2">3</li>
</ul> */

// create new item at begining, so it get index 0
/* <ul>
    <li key="0"></li>
    <li key="1"></li>
    <li key="2"></li>
    <li key="3"></li>
</ul> */
// when updating the ui react htink that i already have the 3 elemeents with keys 0,1,2
// so it reuse them and insert new value as 4
// even though we inserted a new value at top it appears at bottom, and values are messed up
// also problem in sorting, timestamp is correct, but input values are not

// When to use index as Key?
// 1. items in your list doesnt have unique id.
// 2. the list is a static list and will not change.(dont modify list)
// 3. The list will never be reorderd or filtered.(sorting by column, filtering based on user inputs)

// can use npm packages to generate unique id for a list, or try hashing out a ubique value from one of the existing properties
// react uses key as prop, if not specified
