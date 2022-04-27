
import React, { Fragment, useState, useEffect} from 'react'
import CardFrame from '../../svg/card-frame.svg';
import ConditionalTilter from '../ConditionalTilter/ConditionalTilter.jsx';
import cardBack from '../../img/cardback.png';

import "./_card.scss";

const cardType = "Billionaires";

const Card = ({ defaultFlippedState, hasTiltEffect, id, img, rarity, name, type }) => {
  const [isFlipped, setOrientation] = useState(defaultFlippedState);
  const flippedClass = isFlipped ? "flipped " : "";
  const tilt = hasTiltEffect ? hasTiltEffect : false;
  const flipCard = () => {
    setOrientation(!isFlipped)
  };
  return (
    <div className="card">
      <ConditionalTilter
        condition={ tilt }
      >
        <Fragment>
          <div className={`card__element ${rarity} ${flippedClass}`} onClick={ (e)=> { e.stopPropagation(); flipCard() } }>
            <div className="overflow-container">
              <div className="card__front">
                <CardFrame />
                <div className="card__content">
                  { name }
                </div>
                <img src={ `img/${id}.jpeg` } />
              </div>
              <div className="card__back" aria-hidden>
                <img src={cardBack} />
                <h3 className="card__type">{ type }</h3>
              </div>
            </div>
          </div>
        </Fragment>
      </ConditionalTilter>
    </div>
  );
};

export default Card;
