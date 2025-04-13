import React from 'react'
import './button.css'

function Button(props) {
  return (
    <button className={props.button_class}> {props.button_content}</button>
  )
}

export default Button