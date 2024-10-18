import React, { Component } from 'react'

class T16_ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Jagdeep
        //         </div>
        //     )
        // }else{
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        // // return (
        // //     <div>
        // //         <div>
        // //             Welcome Jagdeep
        // //         </div>
        // //         <div>
        // //             Welcome Guest
        // //         </div>
        // //     </div>
        // // )

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Jagdeep</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // return(
        //     this.state.isLoggedIn?
        //     <div>Welcome Jagdeep</div>:
        //     <div>Welcome Guest</div>
        // )

        return this.state.isLoggedIn && <div>Welcome Jagdeep</div>
    }
}

export default T16_ConditionalRendering