import React from 'react'

// here we have used destructuring to access person properties directly
// function T17_Person({person}) {
//   return (
//     <div>
//         <h2>
//             I am {person.name}. I am {person.age} year old. I know {person.skill}
//         </h2>
//     </div>
//   )
// }


function T17_Person(props) {
    return (
      <div>
        <h2>
          I am {props.person.name}. I am {props.person.age} year old. I know {props.person.skill} {props.group}
        </h2>
      </div>
    );
  }

export default T17_Person