
import React, { Fragment, useState, useRef, useEffect} from 'react'
import CardFrame from '../../svg/card-frame.svg';
import CardFrameBack from '../../svg/card-frame-back.svg';
import ConditionalTilter from '../ConditionalTilter/ConditionalTilter.jsx';
import cardBack from '../../img/cardback-with-frame.png';

import "./_card.scss";

const cardType = "Billionaires";

const Card = ({ flippedByDefault, flipOnDelay, hasTiltEffect, id, img, rarity, name, type }) => {
  const [isFlipped, setOrientation] = useState(flippedByDefault);
  const tilt = hasTiltEffect ? hasTiltEffect : false;
  const flipDelay = 2300;

  const flipCard = () => {
    setOrientation(isFlipped? false : true)
  };

const timerRef = useRef(null)
useEffect(() => {
  if (flipOnDelay == true) {
    timerRef.current = setTimeout( ()=> {
      flipCard(name)
      return () => clearTimeout(timerRef.current)
    }, flipDelay);
  }
},[])

  return (
    <div className="card">
      <div
        className={
          `card__element
          ${rarity}
          ${ isFlipped ? 'flipped' : '' }`
        }
        onClick={ ()=> { flipCard() }}>
        <div className="card__front">
          <ConditionalTilter
            condition={ tilt }
          >
            <CardFrame />
            /*
              This is where the content would go
              <div className="card__content">
                { name }
              </div>
            */
            <img src={ `img/${id}.jpeg` } />
          </ConditionalTilter>
        </div>
        <div className="card__back" aria-hidden>
          <ConditionalTilter
            condition={ tilt }
          >
            <img src={cardBack} />
            <h3 className="card__type">{ type }</h3>
          </ConditionalTilter>
        </div>
      </div>
    </div>
  );
};

export default Card;
