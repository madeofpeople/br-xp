import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);
  return <div ref={tilt} {...rest} />;
};

const ConditionalTilter = ({ condition, wrapper, children }) =>
  condition ?
    <Tilt className="tilter" data-glare-prerender="true" data-tilt-glare data-tilt-max-glare="0.8" data-tilt-scale="1.1">
      {children}
    </Tilt>
    : children;

export default ConditionalTilter;
