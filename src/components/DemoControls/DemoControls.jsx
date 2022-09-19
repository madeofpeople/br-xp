import React from 'react'
import "./_demo__controls.scss";

function DemoControls ({ setSection, whichSection }) {
  return (
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
              Pack Opening
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> { setSection(2) }}>
              Card Drop
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> { setSection(3) }}>
              Onboarding
            </a>
          </li>
          <li>
            <a href="#" onClick={()=> { setSection(4) }}>
              Card Showcase
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DemoControls;
