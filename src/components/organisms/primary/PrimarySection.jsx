import React from 'react'
import './primary-section.css'
import image from '../../../assets/images/illustration-hero.svg'

function PrimarySection() {
  return (
    <div className='container'>
        <div className='content'>
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it free.</p>
        </div>
        <div>
            <img src={image} alt="Hero illutration" />
        </div>
    </div>
  )
}

export default PrimarySection