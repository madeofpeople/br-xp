import React from 'react'
import "./_demo__controls.scss";

function DemoControls ({ setSection }) {
  console.log(setSection)
  return (
    <div className="demo__controls">
      <nav>
        <ul>
          <li>
            <a href="#" onClick={()=> { setSection('card-showcase') }}>
              Card Showcase
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> { setSection('pack-xp') }}>
              Pack Opening
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> { setSection('card-drop-xp') }}>
              Card Drop
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DemoControls;
