import React from 'react'
import "./_demo__controls.scss";

function closeMenuOnBodyClick (e) {
  console.log("a");
  if ( 
    document.body.classList.contains( 'menu--open' ) &&
    !e.target.closest('.demo__controls') && 
    !e.target.closest('.menu__button') 
  ) {
    console.log('b');
    document.body.classList.remove('menu--open')
    document.querySelector('.demo__controls').classList.remove('active')
  }
}

document.body.addEventListener( 'click', (e) => {
  closeMenuOnBodyClick(e);
});

function DemoControls ({ setSection, whichSection }) {
  return (
    <>
      <div className="demo__controls">
        <nav>
          <ul>
            <li>
              <a href="#" onClick={()=> { setSection(0) }}>
                No Win
              </a>
            </li>
            <li>
              <a href="#" onClick={()=> { setSection(1) }}>
                Win Cash
              </a>
            </li>
            <li>
              <a href="#" onClick={()=> { setSection(2) }}>
                Win Coin
              </a>
            </li>
            <li>
              <a href="#" onClick={()=> { setSection(3) }}>
                Win Non-Cash
              </a>
            </li>
            <li>
              <a href="#" onClick={()=> { setSection(4) }}>
                Win Entries
              </a>
            </li>
            <li>
              <a href="#" onClick={()=> { setSection(5) }}>
                Pack Opening
              </a>
            </li>
            <li>
              <a href="#" onClick={()=> { setSection(6) }}>
                Card Drop
              </a>
            </li>
            <li>
              <a href="#" onClick={()=> { setSection(7) }}>
                Onboarding
              </a>
            </li>
            <li>
              <a href="#" onClick={()=> { setSection(8) }}>
                Card Showcase
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menu__button">
        <a className="hamburger" onClick={ ()=> {
            document.body.classList.toggle('menu--open')
            document.querySelector('.demo__controls').classList.toggle('active');
          }
        }>☰</a>
      </div>
    </>
  );
}

export default DemoControls;
