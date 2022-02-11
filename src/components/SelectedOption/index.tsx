import React from 'react';
import Button from '../Button';
import './SelectedOption.styles.css'

interface SelectedOptionProps {
  option: string;
  handleRemove: (opt: string) => void;
}

const SelectedOption = ({option, handleRemove}: SelectedOptionProps) => {
  return (
    <div className='selected-option'>
        <span className='selected-option-title'>{option}</span>
        <Button btnText='x' handleClick={() => handleRemove(option)} />
    </div>
  )
}

export default SelectedOption;