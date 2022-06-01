import React, { useEffect } from 'react'

import SparkEmitter from './emitter.js'
import "./_emitter.scss"


const sparkEmitter = null
const emitterInstance = null

const Emitter = ({ onClick, children }) => {
  useEffect((args) => {
    new SparkEmitter('.emitter-canvas', {
      total: 700,
      spawnWave: 1,
      spawnDuration: 40,
      scale: {
        x: 1,
        y: 1
      },
      particle: {
        gravity: {
          min: 0.075,
          max: 0.1
        },
        size: 1
      }
    })
  })
  return <canvas className="emitter-canvas"></canvas>
};

export default Emitter;
