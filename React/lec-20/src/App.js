import './App.css';
import React,{Component} from 'react';
 //import Person from './Components/Persons/Person';
//  import Form from "./Components/Forms.js";
 import ControlledComponent from "./Components/controlledComponent.js";
  class App extends Component 
  {
       constructor(props){
         super(props);
         this.state = {
           persons: [
                    {
                       
                      name : "Waqas",
                      age  : 31,
                    },
                    {
                      
                      name : "Abair",
                      age  : 32,
                    },
                    {
                      
                      name : "Hassan",
                      age  : 33,
                    },
                    {
                      
                      name : "Usman",
                      age  : 33,
                    },
                    {
                       
                      name : "Qasim",
                      age  : 33,
                    }
           ],
           isShow : true,
         };
             this.togglerHandler = this.togglerHandler.bind(this);
       }
       togglerHandler(){
         this.setState({isShow : !this.state.isShow});
       }
  removeHandler =(personIndex) => {

    const personsCopy = this.state.persons;
    
    personsCopy.splice(personIndex, 1);

    this.setState({ persons : personsCopy });
     

  };

   render() {
       
      
     return <div  className='App'> 
       <ControlledComponent />
          
       </div>
     
   }
 }
 

export default App;
