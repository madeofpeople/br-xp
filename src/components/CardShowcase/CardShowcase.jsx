import React, { useState } from 'react'
import Card from '../Card/Card';
import './_card-showcase.scss';
import cardData from '../../data/card-data';

function CardShowcase () {
  const images = require.context('../../../public/lions', true);
  const cards = cardData.cards.map(({ id, name, rarity, type }) =>
    <Card
      hasTiltEffect={ true }
      key={ id }
      id={ id }
      name={ name }
      rarity={ rarity }
      type={ type }
      />
  );
  return (
    <div className="showcase">
      { cards }
    </div>
  );
};

export default CardShowcase;
