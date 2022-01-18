import React, { useState } from 'react'

export default function TextForm(props) {

    
   const onChangeHandler = (event) => {
       
         //console.log("Clicked onChangeHandler");
         setText(event.target.value);

    };
    const onClickUp = () => {
        let newText = text.toUpperCase();
        setText(newText);


    }
    const onClickLo = () => {
        let newText = text.toLowerCase();
        setText(newText);


    }
    const [text, setText] = useState("Enter Text Here!");
    return (
        <>
            <div className="container">

                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" onChange={onChangeHandler} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button type="button" className="btn btn-primary my-3" onClick={onClickUp}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-primary mx-3 my-3" onClick={onClickLo}>Convert to Lowercase</button>

                </div>
            </div>
            <div className="container">
                    <h2>Your text Summary</h2>
                    <p>{text.split(" ").length }  Words   and {text.length }  Characters </p>
                    <p>{0.008 *text.split(" ").length }  Minutes read </p>
                    <h2>Preview</h2>
                    <p>{text}</p>
            </div>
        </>
    )
}
