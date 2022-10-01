import React, { useState, useEffect, useRef } from 'react';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import DemoControls from './components/DemoControls/DemoControls';
import CardShowcase from './components/CardShowcase/CardShowcase';
import CardDrop from './components/CardDrop/CardDrop';
import NoWin from './components/NoWin/NoWin';
import WinCoins from './components/WinCoins/WinCoins';
import WinCash from './components/WinCash/WinCash';
import PackOpening from './components/PackOpening/PackOpening';
import Onboarding from './components/Onboarding/Onboarding';

function App() {

  const [deckWidth, setDeckWidth] = useState(0);
  const [whichSection, setSection] = useState(0);

  useEffect((args) => {
    const deck = document.getElementById("slide-deck");
    const slides = deck.querySelectorAll(".slide");
    if ( deckWidth !== 0 ) {
      setDeckWidth((slides.length * 100) + "vw");
    }
  },[]);

  return (
    <div style={{
        position:"relative",
        height: "100vh"
      }}>
      <div
        className="slide-deck"
        id="slide-deck"
        data-section={whichSection}
        style={{ width: deckWidth, left: -(100*whichSection) + "vw" }}
        >
        <section className="slide" id="no-win-xp">
          <NoWin />
        </section>

        <section className="slide" id="win-cash-xp">
          <WinCash />
        </section>

        <section className="slide" id="win-coins-xp">
          <WinCoins />
        </section>

        <section className="slide" id="win-non-cash-xp">
          <h2>win non-cash</h2>
        </section>

        <section className="slide" id="win-entries-xp">
          <h2>win entries</h2>
        </section>


        <section className="slide" id="pack-opening-xp">
          <PackOpening />
        </section>
        <section className="slide" id="card-drop-xp">
          <CardDrop />
        </section>
        <section className="slide accent-bg" id="onboarding-xp">
          <Onboarding />
        </section>
        <section className="slide" id="card-showcase-xp">
          <CardShowcase />
        </section>
      </div>
      <DemoControls setSection={ setSection } whichSection={ whichSection } />
    </div>
  );
};

export default App;
