import React, { Component } from "react";

const T9_Greet=(props)=>{
    console.log(props);
    // props.name='he';// error: prop is read only
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    ) 
}
// {} feature of jsx and used in react
// if u know what properties u will pass use attributes, else if you want ot pass dynamic content then pass in tags

// class T9_Greet extends Component{
//     render(){
//         return <div>
//             <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
//             {this.props.children}
//         </div>;
//     }
// }

export default T9_Greet;