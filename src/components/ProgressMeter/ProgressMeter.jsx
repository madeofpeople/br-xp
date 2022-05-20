import React from 'react'
import './_progress-meter.scss';

function ProgressMeter ({ data, step }) {
  let ratio = (step > 0) ? (step - 1) / (data.length - 1) : 0;
  let percentage = ratio * 100
  return (
    <div className="progress-meter">
      <div class="onboarding-rewards">
        <h2>Earn 5 Big Rich Bucks for completing your onboarding!</h2>
        <ul>
          {
            data.map ( (item, index) => {
              return (
                <li
                  key={ index }
                  className={ `progress-meter__step ${(step-1 == index) ? 'active ' : ''}` } >
                  <span className="step">{item.step}</span>
                  <span className="reward">{ item.award }</span>
                </li>
              )
            })
          }
        </ul>
      </div>
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
  );
};

export default ProgressMeter;
