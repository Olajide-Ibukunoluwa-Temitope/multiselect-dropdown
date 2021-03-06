import React, { useContext } from 'react';
import { MultiSelectContext } from '../../context/MultiSelectContext';
import Button from '../Button';
import './SelectedOption.styles.css'

interface SelectedOptionProps {
  option: string;
}

const SelectedOption = ({option}: SelectedOptionProps) => {
  const {functions} = useContext(MultiSelectContext)
  return (
    <div className='selected-option'>
        <span className='selected-option-title'>{option}</span>
        <Button btnText='x' handleClick={() => functions?.handleRemoveSelectedOption(option)} />
    </div>
  )
}

export default SelectedOption;