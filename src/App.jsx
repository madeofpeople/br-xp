import React, { useState, useEffect, useRef } from 'react';
import CardShowcase from './components/CardShowcase/CardShowcase.jsx';
import Modal from './components/Modal/Modal.jsx';
import Button from './components/Button/Button.jsx';
import DemoControls from './components/DemoControls/DemoControls.jsx';
import CardDropExperience from './components/CardDropExperience/CardDropExperience.jsx';
import PackOpeningExperience from './components/PackOpeningExperience/PackOpeningExperience.jsx';

function App() {

  const [whichSection, setSection] = useState('card');
  const [packModalState, setPackModalState] = useState(false);
  const [cardDropModalState, setCardDropModalState] = useState(false);

  return (
    <div style={{
        position:"relative",
        height: "100vh"
      }}>
      <div className="slide-deck" data-section={whichSection}>
        <section className="slide" id="card-showcase">
          <CardShowcase />
        </section>
        <section className="slide" id="pack-xp">
          <PackOpeningExperience />
        </section>
        <section className="slide" id="card-drop-xp">
          <CardDropExperience />
        </section>
      </div>
      <DemoControls setSection={ setSection }></DemoControls>
    </div>
  );
};

export default App;
