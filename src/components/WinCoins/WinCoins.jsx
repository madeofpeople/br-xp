import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import CoinSpin from '../CoinSpin/CoinSpin'
import Emitter from '../Emitter/Emitter'

import './_win-coins.scss'

function WinCoins({ trigger, award, emitSparks }) {

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
                    <h2>You won 10 Big Rich Coins!</h2>
                </div>
                <div className="coin-wrapper">
                    <CoinSpin count="10"></CoinSpin>
                    <Emitter></Emitter>
                </div>
                <Button className="button">
                    <span>Continue</span>
                </Button>
            </Modal>
            <Button className="button" onClick={ ()=> openModal() }>
                <span>Win Coins</span>
            </Button>
        </>
    );
};

export default WinCoins;
