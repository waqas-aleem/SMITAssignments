import React, { Component } from 'react'

  class Forms extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               name : null,
               country : null,
          }
      }
      nameHandler = (event) => 
      {
          console.log(event.target.value);

      };
      onChangeHandler = (event) => 
      {
        console.log(event.target.value);
      };
      onSubmitHandler = (event) => {
          event.preventDefault();
            console.log(this.state);
            const name = event.target.name.value;
            const country = event.target.country.value;
            this.setState({name, country},()=>{
                console.log(this.state);
            });
            event.target.name.value="";
            event.target.country.value="";



      };
    render() {
        return (
            <div> 
                   <form onSubmit={this.onSubmitHandler}>
                    <div>
                        
                            
                        
                        <label htmlFor="">Name:</label> 
                        <input type="text" name="name" />
                    </div>    
                    <div>
                        <label htmlFor="">Country:</label> 
                        <select name="country" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>

                        </select>
                    </div>  
                    <button type="submit">Submit</button>    
                    </form>
                       
            </div>
        )
    }
};

export default Forms
