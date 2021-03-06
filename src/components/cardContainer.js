import PropTypes from "prop-types"
import React from "react"

import Card from "./card"

// for styling
import "./skeleton.css"
import "./cardContainer.css"


const createCards = (cards) => cards.map( card => (
  <div className="one-third column" key = {card.title}>
     <Card {...card}/>
  </div>
))

const CardContainer = (props) => {

  const fliterdCards = props.cards.filter(card => card.visible);

  const cardsHTML = fliterdCards.map((card, i) => {
    if((i + 1) % 3 === 0) {
      return (
        <div className="row cards" key={i}>
          {createCards(fliterdCards.slice(i - 2, i + 1))}
        </div>
      ) 
    } else if (i === fliterdCards.length - 1 ) {
      return (
        <div className="row cards" key={i}>
         {createCards(fliterdCards.slice(Math.floor(i / 3) * 3, fliterdCards.length))}
        </div>
      ) 
    }
  })

  return(
    <div>
      {cardsHTML}
    </div>
  );
}

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(Card)
}

export default CardContainer