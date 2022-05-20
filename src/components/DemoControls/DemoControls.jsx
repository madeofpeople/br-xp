import React from 'react'
import "./_demo__controls.scss";

function DemoControls ({ setSection, whichSection }) {
  return (
    <div className="demo__controls">
      <nav>
        <ul>
          <li>
            <a href="#" onClick={()=> { setSection(0) }}>
              Pack Opening
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> { setSection(1) }}>
              Card Drop
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> { setSection(2) }}>
              Onboarding
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> { setSection(3) }}>
              Card Showcase
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DemoControls;
