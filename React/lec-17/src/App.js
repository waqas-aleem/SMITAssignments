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
           ],
           isShow : true,
         };
             this.togglerHandler = this.togglerHandler.bind(this);
       }
       togglerHandler(){
         this.setState({isShow : !this.state.isShow});
       }


   render() {
      let persons;
      if (this.state.isShow)//if it is true 
      {
       persons = this.state.persons.map((p) => {
        return <Person key={p.id} name = {p.name} age ={p.age} />
      });   
      }
      else
      {
          persons = "";
      }
      //First method to show for terriry operators
      // persons = this.state.persons.map((p) => {
      //   return <Person key={p.id} name = {p.name} age ={p.age} />
      // });
      console.log(this.state.isShow);
     return <div  className='tooglebtn'> 
       <button onClick={this.togglerHandler}>Toggle</button>
       {/* {this.state.isShow === true ? persons : ""}  blocked for second scenrio*/ persons}

       </div>
     
   }
 }
 

export default App;
