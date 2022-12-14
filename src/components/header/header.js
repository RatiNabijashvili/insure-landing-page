import React from 'react'
import { Button } from '../button/button'
import Styles from './header.module.css'
import IntroImg from './img/image-intro-desktop.jpg'
import LeftDecoration from './img/bg-pattern-intro-left-desktop.svg'
import RightDecoration from './img/bg-pattern-intro-right-desktop.svg'

const Header = () => {
  return (
    <div className={Styles.div}>
      <div className={Styles['responsive-div']}>
        <div className={Styles.text}>
          <h2 className={Styles.h2}>
            Humanizing <br />
            your insurence.
          </h2>
          <p className={Styles.p}>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected
          </p>
          <Button name='VIEW PLANS' className={Styles['header-button']} />
        </div>
        <img src={IntroImg} alt='main-image' className={Styles['main-img']} />
      </div>
      <img
        src={RightDecoration}
        alt='right-decoration'
        className={Styles['right-decoration']}
      />
      <img
        src={LeftDecoration}
        alt='left-decoration'
        className={Styles['left-decoration']}
      />
    </div>
  )
}

export default Header
