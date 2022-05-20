import React from 'react'
import Slide from './slide'

const slides = []

// const slide = ({children}) => (
//   <Slide children={} />
// )

for (const [index, value] of elements.entries()) {
  items.push(<Slide key={index}>{value}</Slide>)
})

const Slider = ({}) => (
  <div style={{
      position:"relative",
      height: "100vh"
    }}>
    <div className="slide-deck" data-section={whichSection}>
      {items}
    </div>
  </div>
);

export default Slider;
