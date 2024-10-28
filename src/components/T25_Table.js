import React from "react";
import T25_Column from "./T25_Column";

function T25_Table() {
    const items = [{id:1, title:'Title 1'},{id:2, title:'Title 2'},{id:3, title:'Title 3'}];
  return (
    <>
      {
          items.map(item => (
              <React.Fragment key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.id}</p>
          </React.Fragment>
        ))
    }
    <table>
      <tbody>
        <tr>
          <T25_Column />
        </tr>
      </tbody>
    </table>
    </>
  );
}

export default T25_Table;
// react-dom.development.js:86 Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>.
// react-dom.development.js:86 Warning: validateDOMNesting(...): <div> cannot appear as a child of <tr>.