import React from 'react';
// function T6_greet(){
//     return <h1>Hello Jagdeep</h1>
// }
// const T6_greet=()=><h1>Hello Jagdeep</h1>
// export default T6_greet;

// named export, now import with exact same name in {}
export const T6_greet=()=><h1>Hello Jagdeep</h1>
const T6_greet2=()=><h1>Good Evening Jagdeep</h1>
// export default const T6_greet2=()=><h1>Good Evening Jagdeep</h1> // error,Only expressions, functions or classes are allowed as the `default` export.
export default T6_greet2;
export const T6_greet3=()=><h1>Have a nice Day 😊</h1>