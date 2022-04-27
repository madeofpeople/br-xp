import React, { useState } from 'react'
// replace this with masked jpg
import packArt from '../../img/pack.png';
import Card from '../Card/Card.jsx';
import MaskTop from '../../svg/card-pack__mask-top.svg';
import MaskBottom from '../../svg/card-pack__mask-bottom.svg';
import cardData from '../../data/card-data';
import "./_pack.scss";

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function Pack (props) {
  const [status, setStatus] = useState(false);
  const openPack = ()=> {
    setStatus(true)
  }
  const images = require.context('../../../public/lions', true);
  const packSelection = getMultipleRandom(cardData.cards, 3);
  const cards = packSelection.map(({ id, name, rarity, type }) =>
    <Card
      flippedByDefault={ true }
      flipOnDelay={ true }
      hasTiltEffect={ true }
      key={ id }
      id={ id }
      name={ name }
      rarity={ rarity }
      type={ type }
      / >
  );
  return (
    <div className={ `pack ${ status ? 'open' : '' }` } onClick={()=> {
        openPack(true);
      }}>
      <div className="pack__art">
        <div className="pack__top">
          <img src={packArt} />
          <MaskTop />
        </div>
        <div className="pack__bottom">
          <img src={packArt} />
          <MaskBottom />
        </div>
      </div>
      <div className="cards__wrapper">
        <div className="cards">
          { cards }
        </div>
      </div>
    </div>
  );
}

export default Pack;
