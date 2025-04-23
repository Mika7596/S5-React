import React from 'react'
import styles from './lowerFooter.module.css'
import Logo from '../../atoms/logo/Logo'
import Navbar from '../../atoms/navbar/Navbar'
import facebook from '../../../assets/images/icon-facebook.svg'
import twitter from '../../../assets/images/icon-twitter.svg'

function LowerFooter() {
  return (
    <div className={styles.container}>
      <Logo></Logo>
      <div className={styles.navbar}><Navbar style={{color: "white"}}></Navbar></div>
      <div className={styles.media}>
        <img src={facebook} alt="facebook icon" />
        <img src={twitter} alt="Twitter icon" />
      </div>
    </div>
  )
}

export default LowerFooter