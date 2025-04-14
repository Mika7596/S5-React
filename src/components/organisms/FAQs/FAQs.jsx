import React from 'react'
import styles from './faqs.module.css'
import Button from '../../atoms/button/Button'
import { useState } from 'react'

function FAQs() {
    
    const intro = <div className={styles.intro}><h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p></div>

    const questions = ["What is Bookmark?", "How can I request a new browser?", "Is there a mobile app?", "What about other Chromium browsers?"]

     
    
    
    const details = questions.map((question, i) =>(
            <div key={i}>
                <button >{question}</button>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, similique numquam ea veritatis delectus aliquam, veniam doloribus necessitatibus aperiam officiis eaque labore nobis incidunt quod voluptates non voluptas, iure alias!</p>
            </div>
        )

        )
   

  return (
    <div className={styles.faqs}>
    <div>{intro}</div>
    <div className={styles.details}>{details}</div>


    <Button button_content="More Info" button_class={"button-blue"}></Button>
    </div>
  )
}

export default FAQs