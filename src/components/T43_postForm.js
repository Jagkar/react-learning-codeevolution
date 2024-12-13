import React, { Component } from 'react'
import axios from 'axios'

export class T43_postForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:'',
         msg:''
      }
    }
    changeHandler =(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (event)=>{
        event.preventDefault()
        console.log(this.state)

        axios.post('https://jsonplaceholder.typicode.com/posts ', this.state)
        .then(response=>{
            console.log(response)
            this.setState({msg: 'Data Posted Successfully'})
        })
        .catch(error=>{
            console.log(error)
            this.setState({msg: 'Error Posting Data'})
        })
    }
  render() {
    const {userId, title, body,msg} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="title" value={title} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={this.changeHandler}/>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div>{msg}</div>
      </div>
    )
  }
}

export default T43_postForm