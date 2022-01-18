 import React from 'react'
 
 export default function Greet(props) 
 {
    
     return (
        <div className="mt-3" >
              
        <div className="Container card mycontainer p-3 m-auto text-center">
            <h3>{props.name} ,</h3>
            <h3>Thank You for Joining Us!</h3>
            <h3>Verification Sent to Email: {props.email}</h3>
        </div>
         </div>
     )
 }
 
