import React from 'react'
import "./_button.scss";

const Button = ({ clickHandler, children }) => (
  <button onClick={ clickHandler } className="button">{ children }</button>
);

export default Button;
