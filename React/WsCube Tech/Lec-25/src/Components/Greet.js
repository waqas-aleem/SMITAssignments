 import React from 'react'
 import Styled from 'styled-components';
 export default function Greet(props) 
 {
    let StyledDiv = Styled.section `
    width : 600px;
    margin : auto;
    @media (min-width:0px) and (max-width:600px){
        margin : auto;
 
    }
    `
     return (
        <StyledDiv className="mt-3" >
              
        <div className="Container card mycontainer p-3 m-auto text-center">
            <h3>{props.name} ,</h3>
            <h3>Thank You for Joining Us!</h3>
            <h3>Verification Sent to Email: {props.email}</h3>
        </div>
         </StyledDiv>
     )
 }
 
