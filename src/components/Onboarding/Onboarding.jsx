import React, { useState } from 'react'
import Button from '../Button/Button';
import ProgressMeter from '../ProgressMeter/ProgressMeter';
import './_onboarding.scss';

const mockData = [
  {
    step: "Your Total Entries Bonus",
    award: "150 Bonus"
  },
  {
    step: "Your Total Entries Bonus",
    award: "150 Bonus"
  },
  {
    step: "Your Total Entries Bonus",
    award: "150 Bonus"
  },
  {
    step: "Your Total Entries Bonus",
    award: "150 Bonus"
  },
  {
    step: "Your Total Entries Bonus",
    award: "150 Bonus"
  },
];

function Onboarding (props) {
  const [step, setStep] = useState(0);
  return (
    <div className="onboarding-wrapper">
      <div className="onboarding__steps">
        {
          mockData.map((item, index) => (
            <section className={`step step-${index}`} key={ index }>
              <Button onClick={ ()=> setStep(step + 1) }>Next Step</Button>
            </section>
          ))
        }
      </div>
      <ProgressMeter data={ mockData } step={ step } />
    </div>
  );
};

export default Onboarding;
