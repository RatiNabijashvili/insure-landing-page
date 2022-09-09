import React from 'react'
import Styles from './button.module.css'
export const Button = (props) => {
  return (
    <button className={`${Styles.button} ${props.className}`}>
      {props.name}
    </button>
  )
}
