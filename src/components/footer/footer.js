import React from 'react'
import FooterComponent from '../footerComponetns/footerComponent'
import Styles from './footer.module.css'
const footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.responsive}>
        <div className={Styles['main-div']}>
          <img src='/images/logo.svg' alt='img' />
          <div>
            <img
              src='/images/icon-facebook.svg'
              className={Styles['fb-icon']}
              alt='facebook-icon'
            />
            <img
              src='/images/icon-twitter.svg'
              className={Styles['twitter-icon']}
              alt='twitter-icon'
            />
            <img
              src='/images/icon-pinterest.svg'
              className={Styles['pinterest-icon']}
              alt='pinterest-icon'
            />
            <img
              src='/images/icon-instagram.svg'
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
