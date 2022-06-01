import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Card from '../Card/Card'
import Button from '../Button/Button'
import cardData from '../../data/card-data';
import getMultipleRandom from '../../js/random.js';
import './_card-drop.scss'

function CardDrop() {

  const [modalStatus, setModalStatus] = useState('closed');
  const [isStageSet, setStage] = useState(false);

  const closeModal = ()=> {
    setModalStatus('closed')
    setTimeout(()=> setStage(false), 320)
  }

  const openModal = ()=> {
    setModalStatus('opened')
    /* hacky bit to stagger animatons
        when transition-delay wasnt sticking on title and pack
          but helps impriove performance since animations in the modal
            will wait til the modal opening animation is onComplete
    */
    setTimeout(()=> setStage(true), 320)
  }


  const rarity = "rare"
  const name = "Card Name"
  const type = "Billionaires"
  const images = require.context('../../../public/lions', true);
  const whichCard = getMultipleRandom(cardData.cards, 1)[0];

  return (
    <>
      <Modal
        hasStarburst={ true }
        modalStatus={ modalStatus }
        closeModal={ closeModal }
        isStageSet={isStageSet}
        className="modal fancy-modal">
        <h1 className="title">You Got a New Card!</h1>
        <div className="card-container">
          <Card
            flippedByDefault={ true }
            flipOnDelay={ true }
            flipDelay={ 700 }
            hasTiltEffect={ true }
            id={ whichCard.id }
            name={ whichCard.name }
            rarity={ whichCard.rarity }
            type={ whichCard.type }
            />
        </div>
        <h2 className="subhead">Secondary Headline</h2>
      </Modal>
      <Button className="button" onClick={ ()=> openModal() }>
        <span>Get New Card!</span>
      </Button>
    </>
  );
};

export default CardDrop;
