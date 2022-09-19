import React, { useState } from 'react'
import CloseIcon from '../../svg/close.svg';
import Starburst from '../../svg/starburst.svg';
import './_modal.scss';

function Modal({ hasStarburst, modalStatus, closeModal, isStageSet, children }) {
  const stageSet = isStageSet? 'stage-set' : null;
  return (
    <div
      role="button"
      className={ `modal__wrapper ${ modalStatus } ${ stageSet }` }
      onClick={ (e) => {
        e.stopPropagation();
        closeModal()
      }}
    >
      <div
        className="modal"
        onClick={ (e) => { e.stopPropagation() }}>
        <div className="modal__header">
          <a href="#" onClick={ (e)=> {
              e.stopPropagation();
              closeModal();
            }} className="modal__close">
            <CloseIcon />
          </a>
        </div>
        <div className="modal__content">
          {
            (modalStatus === "opened") && <>
              { children }
              { hasStarburst && <Starburst /> }
              </>
            }
        </div>
      </div>
    </div>
  );
}

export default Modal;
