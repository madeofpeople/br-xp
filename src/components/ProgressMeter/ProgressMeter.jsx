import React from 'react'
import './_progress-meter.scss'

function ProgressMeter ({ data, step }) {
  // we do data length - 2 because the first step, is "0" in the flow.
  // (you havent earned anything until you hit the next button the first time.)
  let ratio = (step > 0) ? (step - 1) / (data.length - 2) : 0;
  let percentage = ratio * 100
  return (

    <div className="progress-meter">

      <div className="onboarding-rewards">
        <h2>Earn 5 Big Rich Bucks for completing your onboarding!</h2>
        <div class="meter">
          <ul>
            {
              data.map ((item, index) => {
                const isActive = (step === index)
                if( index > 0) {
                  return (
                    <li
                      key={ index }
                      className={ `progress-meter__step ${ isActive ? 'active ' : ''} ${ step >= index ? 'visited ' : ''}` } >
                      <span>{ item.step }</span>
                    </li>
                  )
                }
              })
            }
          </ul>
          <div className="progress-meter__indicator">
            <div className="bar percent-indicator__outer">
              <div
                className="bar percent-indicator__inner"
                style={{
                  width: `${ percentage }%`
                }}
              ><span className="sr-only">{ `You are ${percentage} percent through onboarding!` }</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressMeter;
