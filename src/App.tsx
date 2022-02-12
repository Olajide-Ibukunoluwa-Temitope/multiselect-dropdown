import React, { useEffect, useState } from 'react';
import './App.css';
import ActiveInput from './components/ActiveInput';
import Button from './components/Button';
import SelectedOption from './components/SelectedOption';
import { MultiSelectContainer } from './context/MultiSelectContainer';
import { filterOptionBySearchTerm } from './utils/options.utils';

const App = (): JSX.Element => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const [searchText, setSearchtext] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [dropdownOpt, setDropdownOpt] = useState<string[]>([]);
  const [maxLengthOfItems, setMaxLengthOfItems] = useState<number>(0);

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
    setSearchtext('');
  };

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchtext(event.target.value)
  };

  const handleRemoveSelectedOption = (option: string) => {
    const selectedOptCopy = selectedOptions;
    const filteredOpt = selectedOptCopy.filter((value) => value !== option);
    const indexOfOptionInDropdownMenu = dropdownOpt.indexOf(option);

    if (indexOfOptionInDropdownMenu !== -1){
      setSelectedOptions(() => {
        return filteredOpt
      })
    } else {
      setSelectedOptions(() => {
        return filteredOpt
      })
      setMaxLengthOfItems(maxLengthOfItems - 1);
    }
    
  };

  const handleCreateOption = (opt: string) => {
    setSelectedOptions((prevState) => {
      return [
        ...prevState,
        opt
      ]
    });
    setIsInputActive(false);
    setSearchtext('');
    setMaxLengthOfItems(maxLengthOfItems + 1)
  };

  const handleDisplayAddTag = () => {
    if(selectedOptions.length !== maxLengthOfItems) {
      return isInputActive ? (
        <ActiveInput />
      ) : (
        <Button btnText='+ Add tag' handleClick={handleAddTag} />
      )
    }
  };

  const filteredOptions = filterOptionBySearchTerm(dropdownOpt, searchText, selectedOptions);

  useEffect(() => {
    const getDropdownOption = async () => {
      try {
        const rawdata = await fetch('http://api.open-notify.org/astros.json');
        const jsonData = await rawdata.json();
        const options = jsonData.people.map(({name}: {name: string}) => name);

        setDropdownOpt(options);
        setMaxLengthOfItems(options.length)
      } catch (error) {
        console.error('error ==>', error)
      }
    };

    getDropdownOption();
  }, [])

  return (
    <MultiSelectContainer.Provider 
      value={{
        state: {
          isInputActive,
          searchText,
          selectedOptions,
          dropdownOpt,
          filteredOptions
        },
        functions: {
          handleAddTag,
          handleSelectOption,
          handleSearchTextChange,
          handleRemoveSelectedOption,
          handleCreateOption
        }
      }}
    >
      <div 
        className="App" 
      >
        <div className='main'>
          <h2 className='title'>Multiselect Dropdown</h2>

          <div className='custom-dropdown'>
            <div className='custom-input'>
              {selectedOptions.map((value, idx) => (
                <SelectedOption key={idx} option={value} />
              ))}

              {handleDisplayAddTag()}
              
            </div>
          </div>
        </div>
      </div>
    </MultiSelectContainer.Provider>
  );
}

export default App;
