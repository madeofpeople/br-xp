import React, { useEffect, useState, useRef } from 'react'
import Button from '../Button/Button'
import ProgressMeter from '../ProgressMeter/ProgressMeter'
import Coin from '../Coin/Coin'
import './_onboarding.scss'

const mockData = [
  {
    step: "Placeholder, a placeholder step",
    award: "Shhhhh"
  },
  {
    step: "Your Total Entries Bonus",
    award: "150 Bonus"
  },
  {
    step: "Complete Sign Up",
    award: "150 Bonus"
  },
  {
    step: "Select Fave 5",
    award: "150 Bonus",
    optional: true
  },
  {
    step: "Link Bank",
    award: "150 Bonus"
  }
];

function Onboarding (props) {

  const [deckWidth, setDeckWidth] = useState(0)
  const [step, setStep] = useState(0)
  const [coinState, setCoinState] = useState(0)
  const [coinBackgroundState, setCoinBackdropState] = useState(0)
  const [emitSparks, setEmitSparks] = useState(0)
  const coinflipTimerRef = useRef(null)
  const coinBackgroundTimeRef = useRef(null)
  const emitSparksTimerRef = useRef(null)
  const hideCoinFlipRef = useRef(null)

  useEffect(()=> {
    const deck = document.getElementById("onboarding__steps")
    const slides = deck.querySelectorAll(".step")
    setDeckWidth((mockData.length * 100) + "vw")
  })

  const showCoin = (step)=> {
    setCoinState(true)
    setCoinBackdropState(true)
    setEmitSparks(true)
    emitSparksTimerRef.current = setTimeout( ()=> {
      setEmitSparks(false)
      return () => clearTimeout(emitSparksTimerRef.current)
    }, 2000)
    coinflipTimerRef.current = setTimeout( ()=> {
      setCoinState(false)
      return () => clearTimeout(coinflipTimerRef.current)
    }, 2400)
    coinBackgroundTimeRef.current = setTimeout( ()=> {
      setCoinBackdropState(false)
      return () => clearTimeout(coinBackgroundTimeRef.current)
    }, 3400)
  }

  const nextStep = (step, skipCoin)=> {
    if(!skipCoin) showCoin()
    setStep(step)
  }

  return (
    <div className="onboarding-wrapper">

      <div
        id="onboarding__steps"
        className={`onboarding__steps ${ step }`}
        style={{ width: deckWidth, left: -(100 * step) + "vw" }}>
        {
          mockData.map((item, index) => (
            <section className={`step step-${index}`} key={ index }>
              { step < mockData.length - 1 &&
                <div className="onboarding__steps__content">
                  <div class="content-wrapper">
                    <Button onClick={ ()=> {
                      if (step <= mockData.length - 1) nextStep(step + 1)
                    }}>Next Step</Button>
                  { item.optional &&
                      <a className="skip-link" href="#" onClick={()=> {
                          if (step <= mockData.length - 1) nextStep(step + 1, true)
                        }}>Skip</a>
                    }
                  </div>
                </div>
              }
              { step === mockData.length - 1 &&
                <h3 className="last-step">ALL DONE!</h3>
              }
            </section>
          ))
        }
      </div>

      <ProgressMeter data={ mockData } step={ step } />

      <div className="awards">
        <Coin
          step={ step }
          emitSparks={ emitSparks }
          trigger={ coinState }
          award={ mockData[step].award }>
        </Coin>
        <div className={`card-backdrop ${ coinBackgroundState ? 'active' : '' }`}>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
