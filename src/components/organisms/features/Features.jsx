import React from 'react'
import './features.css'
import data from '../../../assets/data/features.json'
import Button from '../../atoms/button/Button'

function Features() {

  return (
    <>
        <div className='intro'>
            <h2>Features</h2>
            <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>

        <div className='indicators'>
            {
                data.map((tab, i) =>(
                    <div className='indicator-container' key={i}>
                        <div id={i}>{tab.indicator}</div>
                    </div>
                ))
            }
        </div>

        <div className='slider-container'>
            {
                data.map((tab, i) =>(
                  <div className='tab' id={i} key={i}>
                    <div className='img'>
                        <img src={tab.img} alt="" />
                    </div>
                    <div className='tab-content'>
                        <h3>{tab.title}</h3>
                        <p>{tab.paragraph}</p>
                        <Button button_class = "button-blue" button_content="More info"></Button>
                    </div>
                  </div>  
                ))
            }
        </div>
    </>
  )
}

export default Features