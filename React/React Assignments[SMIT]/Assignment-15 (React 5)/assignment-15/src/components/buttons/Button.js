import React from 'react'

export default function Button(props) {
  return (
      <div>

         <button type='button' onClick={props.onClick} className={props.classes}>{props.text}</button>
      
      </div>
  )
}
