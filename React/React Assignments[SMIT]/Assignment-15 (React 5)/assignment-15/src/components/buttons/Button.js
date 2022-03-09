import React from 'react'

export default function Button(props) {
  return (
      <div>

         <button type='button' style={props.color} onClick={props.onClick} className={props.classes}>{props.text}</button>
      
      </div>
  )
}
