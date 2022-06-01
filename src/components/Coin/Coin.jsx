
import React from 'react'
import ConditionalTilter from '../ConditionalTilter/ConditionalTilter';
import CoinGraphic from '../../img/coin.svg';
import Emitter from '../Emitter/Emitter'

import "./_coin.scss";

const Coin = ({ trigger, award, emitSparks }) => {
  return (
    <div className={ `coin ${ trigger ? 'active' : '' }`}>
      <div
        className={
          `card__element ${ trigger ? 'active' : '' }`
        }>
        <div className="card__front">
          <CoinGraphic />
        </div>
        <div className="card__back" aria-hidden>
          <h3 className="award">{ award }</h3>
        </div>
      </div>
      { emitSparks &&
        <Emitter></Emitter>
      }
    </div>
  );
};

export default Coin;
