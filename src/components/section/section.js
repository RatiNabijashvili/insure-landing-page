import React from 'react'
import Styles from './section.module.css'
import ProcessIcon from './img/icon-snappy-process.svg'
import PricesIcon from './img/icon-affordable-prices.svg'
import PeopleIcon from './img/icon-people-first.svg'

const Section = () => {
  return (
    <section className={Styles.section}>
      <div className={Styles.responsive}>
        <h2 className={Styles['main-h2']}>We're different</h2>
        <div className={Styles['main-div']}>
          <Components
            logo={ProcessIcon}
            title='Snappy Process'
            description='Our application process can be completed in minutes, 
        not hours. Don’t get stuck filling in tedious forms.'
          />
          <Components
            logo={PricesIcon}
            title='Affordable Prices'
            description='We don’t want you worrying about high monthly costs. 
        Our prices may be low, but we still offer the best coverage possible.'
          />
          <Components
            logo={PeopleIcon}
            title='People First'
            description='Our plans aren’t full of conditions and clauses to prevent payouts. 
        We make sure you’re covered when you need it.'
          />
        </div>
      </div>
    </section>
  )
}

const Components = (props) => {
  return (
    <article className={Styles.components}>
      <img src={props.logo} />
      <h2 className={Styles.title}>{props.title}</h2>
      <p className={Styles.description}>{props.description}</p>
    </article>
  )
}

export default Section
