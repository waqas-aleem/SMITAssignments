 import Styled from 'styled-components';

  function  Form (props) {
    //  const btnStyle= {
    //      backgroundColor : "green",
    //      color : "white",

    //  }

    let StyledButton = Styled.button `
        display:block;
        width : 100%;
        background-color:orange;
        color : white;
        border:none;
        padding : 10px 5px;
        margin : 5px;
        border-radius: 5px;
        font-size : 20px;
        &:hover {
            box-shadow : 0px  0px 5px orange;
        }
        @media (min-width:0px) and (max-width:600px){
            font-size : 20px;
            padding : 0px;
            margin : 0px;
        }
        

    `;
    let StyledDiv = Styled.section `
    width : 600px;
    margin : auto;
    @media (min-width:0px) and (max-width:600px){
        margin : auto;
 
    }
    `
     let btnText, passBoxType;
     let btnClasses=["btn", "m-1"];
     if (props.showPass === true) {
        // btnStyle.backgroundColor = "red" ;
        btnText="Hide Password";
        passBoxType="text";
        btnClasses.push("btn-danger");
         
    } else{
        btnText="Show Password";
        passBoxType="password";
        btnClasses.push("btn-success");

    };
        return (
            <StyledDiv className="mt-3" >
              
                <div className="Container card mycontainer p-3 m-auto ">
                <h1 className="text-center">Registration Form</h1>
                    <form className="form-group" onSubmit={props.submit}>
                        <label htmlFor="" className="form-label">Name:</label>
                        <input type="text" name="Username"  required className="form-control"/>

                        <label htmlFor="" className="form-label">Email:</label>
                        <input type="email" name="email"  required className="form-control"/>
                        <label htmlFor="" className="form-label">Password:</label>
                        <input type={passBoxType} name="password"  required className="form-control"/>
                        <br/>
                        <button type="submit" className="btn btn-primary m-1 ">Register</button>

                        <button type="button" className={btnClasses.join(" ")} onClick={props.click} >{btnText}</button>
                        <StyledButton type="button">Login</StyledButton>
                    </form>
                
            </div>
            </StyledDiv>
        )
    }
 

export default Form;
