import React from 'react'
import FooterComponent from '../footerComponetns/footerComponent'
import Styles from './footer.module.css'
import Logo from './img/logo.svg'
import FacebookIcon from './img/icon-facebook.svg'
import TwitterIcon from './img/icon-twitter.svg'
import PinterestIcon from './img/icon-pinterest.svg'
import InstagramIcon from './img/icon-instagram.svg'

const footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.responsive}>
        <div className={Styles['main-div']}>
          <img src={Logo} alt='img' />
          <div>
            <img
              src={FacebookIcon}
              className={Styles['fb-icon']}
              alt='facebook-icon'
            />
            <img
              src={TwitterIcon}
              className={Styles['twitter-icon']}
              alt='twitter-icon'
            />
            <img
              src={PinterestIcon}
              className={Styles['pinterest-icon']}
              alt='pinterest-icon'
            />
            <img
              src={InstagramIcon}
              className={Styles['instagram-icon']}
              alt='instagram-icon'
            />
          </div>
        </div>
        <div className={Styles['div-dec']} />
        <div className={Styles['footer-components']}>
          <FooterComponent
            title='our company'
            list={['how we work', 'why insure?', 'view plans', 'reviews']}
          />
          <FooterComponent
            title='Help me'
            list={['FAQ ', 'Terms of use', ' Privacy policy', 'Cookies']}
          />
          <FooterComponent
            title='Contact'
            list={['Sales', 'Support', 'Live chat']}
          />
          <FooterComponent
            title='Others'
            list={['Careers ', 'Press', 'Licenses']}
          />
        </div>
      </div>
    </footer>
  )
}

export default footer
