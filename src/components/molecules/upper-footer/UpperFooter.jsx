import React from 'react'
import styles from './upperFooter.module.css'
import Button from '../../atoms/button/Button'

function UpperFooter() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        <p>35.000+ ALREADY JOINED</p>
        <h3>Stay up-to-date with what we're doing</h3>
        </div>
        <div className={styles.form_container}>
            <input type="email" name="" id="" placeholder='Enter your email address'/>
            <Button button_class={"button-red"} button_content="Contact Us"></Button>
        </div>
    </div>
  )
}

export default UpperFooter