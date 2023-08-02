import React, { Component } from 'react';


class State extends Component{
    
      constructor(){
        super()
        this.state = {
            message: 'welcome to state'
        }
      }  
    
      changeMessage(){
        this.setState({
            message: 'State Welcomes You!!'
        })
      }
   
   
    render(){
        return(
            <div>
        <h1>
              {this.state.message} 
        </h1>
        <button  onClick={() => this.changeMessage()}>Change</button>
        </div>
        )
    }
}

export default State;


