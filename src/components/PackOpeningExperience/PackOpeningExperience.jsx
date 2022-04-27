import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import Pack from '../Pack/Pack';
import Button from '../Button/Button';
import './_packopeningexperience.scss';

function PackOpeningExperience (props) {
  const [packStatus, setPackStatus] = useState(false);
  const [modalStatus, setModalStatus] = useState('closed');
  const [isStageSet, setStage] = useState(false);

  const closeModal = ()=> {
    setModalStatus('closed')
    setStage(false)
  }

  const openModal = ()=> {
    setModalStatus('opened')
    // hacky bit to stagger animatons
    // when transition-delay wasnt sticking on title and pack
    setTimeout(()=> setStage(true), 320)
  }

  return (
    <>
    <Modal
      hasStarburst={ true }
      modalStatus={modalStatus}
      closeModal={closeModal}
      isStageSet={isStageSet}
      className="modal fancy-modal">
      <h1 className="title">Congratulations!</h1>
      <div className="pack-container">
        <Pack onClick={ (e)=> { e.stopPropagation(); setPackStatus(true); } } />
      </div>
      <h2 className="subhead">Secondary Headline</h2>
    </Modal>
    <Button clickHandler={ openModal }>
      <span>Open a pack!</span>
    </Button>
    </>
  );
};

export default PackOpeningExperience;
