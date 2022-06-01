import gsap from "gsap"
import LinkedList from "@utilityjs/linked-list"

export default class Emitter {

  constructor (canvasSelector, options) {

    const defaultOptions = {
      total: 3000,
      spawnWave: 3,
      spawnFreq: 0.0013,
      spawnDuration: 320,
      scale: {
        x: 1,
        y: 1
      },
      size: 2,
      colorStep: 0.15,
      targetFPS: 60,
      gavity: {
        min: 0.05,
        max: 0.085
      }
    }

    this.options = {
      ...defaultOptions,
      ...options
    }

    this.particles = new LinkedList()
    this.pool = new LinkedList()
    this.canvas  = document.querySelector(canvasSelector)
    this.context = this.canvas.getContext("2d")
    this.xPos  = this.canvas.width * 0.5
    this.yPos  = this.canvas.height * 0.5
    this.prevX = this.xPos
    this.prevY = this.yPos
    this.emitX = 0
    this.emitY = 0
    this.hue = 0
    this.spawnTimer = 0
    this.initFrame = 0

    gsap.ticker.fps(options.targetFPS)
    gsap.ticker.add(this.update)

    this.initialize(canvasSelector)
  }

  initialize = (canvasSelector)=> {
    let vw = this.canvas.width
    let vh = this.canvas.height
    let i = this.options.total
    while (i--) {
      const p = new Particle(this, { ...this.options.gravity, ...this.options.particle })
      this.pool.append(p)
    }
    window.addEventListener("resize", this.resizeAction)
    gsap.ticker.lagSmoothing(1000, 16);
    this.initFrame = gsap.ticker.frame
  }

  update = (time, deltaTime, frame)=> {

    const context = this.context
    const canvas = this.canvas
    const pool = this.pool
    const particles = this.particles
    const options = this.options
    const xPos = this.xPos
    const yPos = this.yPos
    const deltaTimeMs = deltaTime * 0.00100
    let spawnTimer = this.spawnTimer
    let emitX = this.emitX
    let emitY = this.emitY
    let prevX = this.prevX
    let prevY = this.prevY
    let hue = this.hue

    context.clearRect(0, 0, canvas.width, canvas.height);
    let p = particles.getHead()
    while (p) {
      let pVal = p.value
      context.fillStyle = `hsla(${pVal.hue}, 100%, ${pVal.brightness}%, ${pVal.alpha})`
      context.fillRect(pVal.x, pVal.y, pVal.size, pVal.size)
      p = p.getNext()
    }
    spawnTimer -= deltaTimeMs;
    // Basically this is trying to make sure particles get spawned once per 'animationFrame'
    // i dont know if the while loop is even necessary here.
    // is spawntimer ever greater than zero?
    while (spawnTimer <= 0) {
      spawnTimer += options.spawnFreq;
      hue += options.colorStep;
      // Interpolate position
      let norm = 1 + spawnTimer / deltaTimeMs;
      emitX = prevX + (xPos - prevX) * norm;
      emitY = prevY + (yPos - prevY) * norm;

      let i = options.spawnWave;
      while (i--) {
        if (!pool.getLength()) continue;
        const color = random(hue, hue + 30) % 360
        const nextP = pool.getHead().value
        if (nextP && (options.spawnDuration === -1 || frame < options.spawnDuration + this.initFrame)) {
          pool.delete(nextP)
          particles.append(nextP)
          nextP.spawn(emitX, emitY, color >> 0, -spawnTimer)
        } else {
        }
      }
    }
    prevX = xPos;
    prevY = yPos;
  }

  resetParticle = (p)=> {
    this.pool.append(p)
    this.particles.delete(p)
  }

  resizeAction = ()=> {
    if (this.canvas.parentNode) {
      this.canvas.width  = this.canvas.parentNode.clientWidth
      this.canvas.height = this.canvas.parentNode.clientHeight      
    }
  }
}


//
// PARTICLE
// ===========================================================================
export class Particle {

  constructor(emitterRef, opts) {
    this.prev = null
    this.next = null
    this.emitter = emitterRef
    this.alpha = random(0.8, 1)
    this.brightness = random(70, 90)
    this.friction = random(0.98, 1)
    this.gravity = random(opts.gravity.min, opts.gravity.max)
    this.hue = 0
    this.size = opts.size
    this.time = random(0.7, 1.1)
    this.vx = this._vx = random(-1.75, 1.75)
    this.vy = this._vy = random(-1.5, 1.5)
    this.x = 0
    this.y = 0

    const self = this

    this.tl = gsap.timeline({
      paused: true,
    });
    this.tl.to(this, this.time, {
      alpha: 20,
      brightness: 70,
      x: random(-5, 5),
      y: random(-100, 50),
      ease: "outExpo",
      onComplete: ()=> {
        this.onAnimationComplete(self)
      },
      modifiers: {
        x: x => {
          this.spawnX += this.vx
          return this.spawnX + x
        },
        y: y => {
          this.vy += this.gravity
          this.spawnY += this.vy
          return this.spawnY + y
        }
      }
    });
    return this;
  }

  onAnimationComplete = (p)=> {
    this.emitter.resetParticle(p)
  }

  spawn = (x, y, hue, startTime)=> {
    const norm = 1 - startTime / this.time
    this.vx = this._vx
    this.vy = this._vy
    this.vy += this.gravity * norm
    this.spawnX = x + this.vx
    this.spawnY = y + this.vy
    this.hue = hue
    this.tl.restart()
  }
}

export const random = (min, max)=> {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min
}

//
// new Emitter('.spark-canvas', {
//   total: 600,
//   spawnWave: 20,
//   particle: {
//     gravity: {
//       min: 0.05,
//       max: 0.0875
//     },
//     size: 2
//   }
// })
