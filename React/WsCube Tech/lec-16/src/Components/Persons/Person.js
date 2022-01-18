import React,{Component} from "react";
 import './Person.css'
class Person extends Component {
    constructor(props)
    {
        super(props);
        this.props = props;
        this.state = {
            name : "Abdul Hadi",
            age  :  31,
        }
      

    }
          
      render(){
         
          return (

                <div className="person">

                    <div className="App"> <label className="personLabel">Name: </label> {this.props.name}</div>
                    <div><label className="personLabel">Age :</label> {this.props.age} Years</div>
                     
                  
                </div>

          );



      }


}
export default Person;