import React from 'react'
import styles from './card.module.css'
import Button from '../../atoms/button/Button'

function Card(props) {
  return (

    <div className={styles.card}>
        <div className='img'><img src={props.img_src} alt="" /></div>
        <h4>{props.browserName}</h4>
        <p>{props.version}</p>
        <div><img src="src/assets/images/bg-dots.svg" alt="" /></div>
        <Button button_content="Add & install extention" button_class="button-blue"></Button>
    </div>
  )
}

export default Card