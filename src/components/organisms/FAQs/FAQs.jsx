import React from 'react'
import styles from './faqs.module.css'
import Button from '../../atoms/button/Button'

function FAQs() {
    const intro = <div className={styles.intro}><h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p></div>

    const details = <div><details>
        <summary>What is Bookmark</summary>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, totam et accusantium rerum velit, ab perferendis neque veniam, molestias recusandae expedita quasi soluta ut! Ex aliquam possimus quia vitae repellendus.</p></details>
        <details>
        <summary>How can I request a new browser?</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae similique quidem dolor nulla ipsa, aut unde, ad quis magnam quia, voluptate dolore debitis commodi velit sint! Corporis sint architecto maiores?</p>

    </details></div>
  return (
    <>
    <div>{intro}</div>
    {details}
    <Button button_content="More Info" button_class="button-blue"></Button>
    </>
  )
}

export default FAQs