import React from 'react'
import { Button } from '../button/button'
import Styles from './moreSec.module.css'
const moreSection = () => {
  return (
    <section className={Styles.section}>
      <div className={Styles['main-div']}>
        <div className={Styles['more-div']}>
          <h2 className={Styles.h2}>
            Find out more <br />
            about how we work How we work
          </h2>
          <Button name='HOW WE WORK' className={Styles['moreSec-button']} />
        </div>
        <img
          src='/images/bg-pattern-how-we-work-desktop.svg'
          alt='how-we-work-decoration'
          className={Styles.img}
        />
      </div>
    </section>
  )
}

export default moreSection
