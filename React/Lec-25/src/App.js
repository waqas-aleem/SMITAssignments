import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import Greet from './Components/Greet';
 

  class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isRegistered:false,
         name:'',
         email:null,
         password:null,
         showPass:false,
      }
    }
    registrationHandler = (event) => {
      
     const name = event.target.Username.value;
     const email = event.target.email.value;
     const password = event.target.password.value;
    this.setState({ name :name, email, password, isRegistered:true});
        event.preventDefault();
    };
    showPassHandler = () => {
         
           this.setState({showPass : !this.state.showPass});
    };
  render() {
    return (
      <div>
        {
        this.state.isRegistered    ? <Greet name={this.state.name} 
        email={this.state.email}/>  : 
        <Form submit={this.registrationHandler} showPass={this.state.showPass}   click={this.showPassHandler}/>
        } 
      </div>
    )
  }
}

export default App

   
 

 