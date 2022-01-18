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
                      id : 1,
                      name : "Waqas",
                      age  : 31,
                    },
                    {
                      id : 2,
                      name : "Abair",
                      age  : 32,
                    },
                    {
                      id : 3,
                      name : "Hassan",
                      age  : 33,
                    },
                    {
                      id : 4,
                      name : "Usman",
                      age  : 33,
                    },
                    {
                      id : 5,
                      name : "Qasim",
                      age  : 33,
                    }
           ]
         }

       }

   render() {
      let persons;
      persons = this.state.persons.map((p) => {

        return <Person key={p.id} name = {p.name} age ={p.age} />


      });
     return <div >
       {persons}
       </div>
     
   }
 }
 

export default App;
