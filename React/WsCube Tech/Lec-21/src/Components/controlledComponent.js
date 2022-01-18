import React, { Component } from 'react'

  class ControlledComponent extends Component 
    {
        constructor(props) {
            super(props)
        
            this.state = {
                name : "Waqas",
            }
        };
        onChangeHandler = (event) => {
                console.log("Old",this.state.name);
                const name=event.target.value;
                this.setState( {name : name },()=>{
                    console.log("New",this.state.name);
                });

        };
    render() 
    {
        return (
            <div>
                <form >
                    <input type="text" name="user_name" value={this.state.name} onChange={this.onChangeHandler} />
                </form>
            </div>
        )
    }
}

export default ControlledComponent;
