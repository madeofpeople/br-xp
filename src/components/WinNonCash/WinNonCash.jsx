import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import './_win-non-cash.scss'

function WinNonCash() {

    const [modalStatus, setModalStatus] = useState('closed');
    const [isStageSet, setStage] = useState(false);
  
    const closeModal = ()=> {
      setModalStatus('closed')
      setTimeout(()=> setStage(false), 320)
    }

    const openModal = ()=> {
        setModalStatus('opened')
        setTimeout(
            function() {
                setStage(true);
            }, 720);
    }

    return (
        <>
            <Modal
                hasStarburst={ true }
                modalStatus={ modalStatus }
                closeModal={ closeModal }
                isStageSet={isStageSet}
                className="modal fancy-modal">
                <h1 className="title err">You Won Something</h1>
                <h2 className="message">Message</h2>
                <Button className="button">
                    <span>Continue</span>
                </Button>
            </Modal>
            <Button className="button" onClick={ ()=> openModal() }>
                <span>Win NonCash Animation</span>
            </Button>
        </>
    );
};

export default WinNonCash;
