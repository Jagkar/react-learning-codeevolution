import React from "react";
const Hello=()=>{
    // return (
    //     <div>
    //         <h1>Hello Jagdeep</h1>
    //     </div>
    // )
    // element, additional properties, children of the element
    // return React.createElement('div',null,"<h1>Hello Jagdeep</h1>");
    
    // create Element can accept any no of children, so split it
    // return React.createElement('div',null,'h1',"Hello Jagdeep");// treating h1 as text node
    
    // return React.createElement('div',null,React.createElement('h1',null,"Hello Jagdeep"));
    
    // 2nd parameter: object of key value pair that will be applied to the object
    // return React.createElement('div',{id:'hello',class:'dummyClass'},React.createElement('h1',null,"Hello Jagdeep"));
    
    // INvalid DOM property: class is reseverd keyword in js, so use className 
    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,"Hello Jagdeep"));
    // Similarly use className in div Tag instead of class

    // Each JSX element is the syntatic sugar for calling createElement
    // so we use react library when we use jsx, because jsx turns to code which uses react library
}

export default Hello;