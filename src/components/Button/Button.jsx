import React from 'react'
import "./_button.scss";

const Button = ({ onClick, children }) => (
  <button onClick={ ()=> onClick() } className="button">{ children }</button>
);

export default Button;
