import React from 'react';
import './Button.styles.css';

interface ButtonProps {
  btnText: string;
  handleClick: () => void;
}

const Button = ({btnText, handleClick}: ButtonProps): JSX.Element => {
  return (
    <button className='btn' onClick={handleClick}>{btnText}</button>
  )
}

export default Button;