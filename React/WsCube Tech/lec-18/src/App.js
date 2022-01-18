import './App.css';
import React,{Component} from 'react';
 import Person from './Components/Persons/Person';
 
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
      let persons;
      if (this.state.isShow)//if it is true 
      {
       persons = this.state.persons.map((p,index) => {
        return <Person key={index} name = {p.name} age ={p.age} remove={()=>this.removeHandler(index)} />//removeHandler Function Passed
      });   
      }
      else
      {
          persons = "";
      }
     
      
     return <div  className='tooglebtn'> 
       <button onClick={this.togglerHandler}>Toggle</button>
       {persons}

       </div>
     
   }
 }
 

export default App;
