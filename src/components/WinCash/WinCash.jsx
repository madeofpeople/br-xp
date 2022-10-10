import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import Emitter from '../Emitter/Emitter'
import Lottie from 'react-lottie-player'
import './_win-cash.scss'
import lottieJSON from '../../lottie/cash-pile.json' 

function WinCash({ }) {

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
                <h1 className="title err">Congratulations</h1>
                <div className="message">   
                    <h2>You've won $100,000!!!</h2>
                </div>
                <div className="anim-wrapper">
                    <Lottie 
                        loop
                        animationData={lottieJSON} 
                        play 
                        style={{ 
                            width: 650,
                            height: 650
                        }} />
                    <Emitter></Emitter>
                </div>
                <Button className="button">
                    <span>Continue</span>
                </Button>
            </Modal>
            <Button className="button" onClick={ ()=> openModal() }>
                <span>Win Cash</span>
            </Button>
        </>
    );
};

export default WinCash;
