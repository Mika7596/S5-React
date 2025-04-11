import React from 'react'
import './primary-section.css'
import image from '../../../assets/images/illustration-hero.svg'
import Button from '../../atoms/button/Button'

function PrimarySection() {
  return (
    <div className='container'>
        <div className='content'>
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it free.</p>
            <Button button_class='button-blue' button_content='Get it on Chrome'></Button>
            <Button button_content='Get it on Firefox'></Button>
        </div>
        <div className='img'>
            <img src={image} alt="Hero illutration" />
        </div>
    </div>
  )
}

export default PrimarySection