import React from 'react';

const Button = props => <button className="Button" onClick={props.onClick}>{props.name}</button>

export default Button;