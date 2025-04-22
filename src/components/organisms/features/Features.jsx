import React from 'react'
import { useState } from 'react'
import './features.css'
import data from '../../../assets/data/features.json'
import Button from '../../atoms/button/Button'

function Features() {
    const intro = <div className='intro'>
                    <h2>Features</h2>
                    <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                </div>

    const indicators = data.map((tab, i) =>(
                        <button className='indicator-container' key={i} onClick={()=>{selectTab(i)}}>{tab.indicator}</button>
                        ))
                        
    const tabs = data.map((tab, i) =>(
                    <div className={`tab`} key={i}>
                        <div className='img'>
                            <img src={tab.img} alt="" />
                        </div>
                        <div className='tab-content'>
                            <h3>{tab.title}</h3>
                            <p>{tab.paragraph}</p>
                            <Button button_class = "button-blue" button_content={tab.button}></Button>
                        </div>
                    </div>  
                    ));

    let [index, setIndex] = useState(0);
    const selectTab = (i) =>{
            setIndex(index = i)  
    }

  return (
    <>
       {intro}

        <div className='indicators'>
            {indicators}
        </div>

        <div className='slider-container'>
            <div className='slider'>
                {tabs[index]}
            </div>
        </div>
    </>
  )
}

export default Features