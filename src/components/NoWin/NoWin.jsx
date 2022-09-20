import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import './_no-win.scss'

function NoWin() {

    const [modalStatus, setModalStatus] = useState('closed');
    const [isStageSet, setStage] = useState(false);
  
    const closeModal = ()=> {
      setModalStatus('closed')
      setTimeout(()=> setStage(false), 320)
    }

    const openModal = ()=> {
        console.log("openModal")
        setModalStatus('opened')
        setTimeout(
            function() {
                console.log("opened delay");
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
                <h1 className="title err">Sorry!</h1>
                <h2 className="sorry-message">You didn't win this time, but try again next week!</h2>
                <Button className="button">
                    <span>Continue</span>
                </Button>
            </Modal>
            <Button className="button" onClick={ ()=> openModal() }>
                <span>No Win Animation</span>
            </Button>
        </>
    );
};

export default NoWin;
