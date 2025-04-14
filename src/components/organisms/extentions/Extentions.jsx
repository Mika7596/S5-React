import React from 'react'
import styles from './extentions.module.css'
import data from '../../../assets/data/extentions.json'
import Card from '../../molecules/card/Card'

function Extentions() {
    const cards = data.map(
        (card, i) =>
            <Card key={i} img_src={card.img} browserName={card.title} version={card.version}></Card>
    )
  return (
    <div className='extentions'>{cards}</div>
  )
}

export default Extentions