import React, { Component } from 'react';


class Forms extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         username :'',
         comments :''
      }
    }
    
    handleUsernameChange =(event) => {
        this.setState({
            username: event.target.value
        })
    }
 
    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit () {
        alert(' Successfully Registered')   
    }
 
    render() {
    return (
    <form  onSubmit={this.handleSubmit}>
      <div>
        <label>Username</label> 
        <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
      </div>

      <div>
      <label>Comments</label>
      <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
      </div>
      
      <button type="submit">Submit</button>
    </form>
    )
  }
}

export default Forms;
