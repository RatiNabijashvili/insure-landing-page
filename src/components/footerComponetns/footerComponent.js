import React from 'react'
import Styles from './fotterComp.module.css'

const footerComponents = (props) => {
  return (
    <div>
      <span className={Styles.title}>{props.title}</span>
      <ul className={Styles.ul}>
        {props.list.map((item) => {
          return <li className={Styles.li}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default footerComponents
