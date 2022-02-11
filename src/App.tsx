import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import SelectedOption from './components/SelectedOption';

const App = (): JSX.Element => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const [searchText, setSearchtext] = useState<string>('')
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const dropdownOpt = [
    'opt1', 
    'opt2', 
    'opt3', 
    'opt4', 
    'opt5', 
    'opt6', 
    'opt7'
  ];

  const handleAddTag = () => {
    setIsInputActive(true)
  };

  const handleSelectOption = (value:string) => {
    setSelectedOptions((prevState) => {
      return [
        ...prevState,
        value
      ]
    })
    setIsInputActive(false);
    setSearchtext('')
  }

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchtext(event.target.value)
  }

  const handleDisplayAddTag = () => {
    if(dropdownOpt.length !== selectedOptions.length) {
      return isInputActive ? (
        <input
         type="text"
         className='input'
         onChange={handleSearchTextChange}
         autoFocus                                                                                                         
        />
      ) : (
        <Button btnText='+ Add tag' handleClick={handleAddTag} />
      )
    }
  }

  const handleRemoveSelectedOption = (option: string) => {
    const selectedOptCopy = selectedOptions;
    const filteredOpt = selectedOptCopy.filter((value) => value !== option);
    console.log('filteredOpt ==> ', filteredOpt)

    setSelectedOptions(() => {
      return filteredOpt
    })

  }

  const filteredOptions = dropdownOpt.filter((value) => value.includes(searchText) && !selectedOptions.includes(value))

  console.log('isInputActive -->', isInputActive)
  console.log('selectedOptions -->', selectedOptions)
  console.log('filteredOptions ---->', filteredOptions)

  return (
    <div 
      className="App" 
    >
      <div className='main'>
        <h2 className='title'>Multiselect Dropdown</h2>

        <div className='custom-dropdown'>
          <div className='custom-input'>
            {selectedOptions.map((value, idx) => (
              <SelectedOption key={idx} option={value} handleRemove={handleRemoveSelectedOption} />
            ))}

            {handleDisplayAddTag()}
            
          </div>

          {isInputActive && <Dropdown handleOnSelect={handleSelectOption} dropdownOptions={filteredOptions} />}
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
