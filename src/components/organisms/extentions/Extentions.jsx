import React from 'react'
import styles from './extentions.module.css'
import data from '../../../assets/data/extentions.json'
import Card from '../../molecules/card/Card'

function Extentions() {
    const intro = <div className={styles.intro}>
        <h2>Download the extension</h2>
        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.</p>
    </div>
    const cards = data.map(
        (card, i) =>
            <Card key={i} img_src={card.img} browserName={card.title} version={card.version} button_text="Add & install extention"></Card>
    )
  return (<>
    {intro}
    <div className={styles.extentions}>{cards}</div>
  </>)
}

export default Extentions