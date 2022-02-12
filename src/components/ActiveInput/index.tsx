import React, { useContext } from 'react';
import {MultiSelectContainer} from '../../context/MultiSelectContainer'
import Dropdown from '../Dropdown';
import './ActiveInput.styles.css';

const ActiveInput = () => {
    const {state, functions} = useContext(MultiSelectContainer);

    return (
        <div className='activeInput'>
            <div>
                <input
                    type="text"
                    className='input'
                    onChange={functions?.handleSearchTextChange}
                    value={state?.searchText}
                    autoFocus                                                                                                         
                />
            </div>
            <Dropdown
                handleOnSelect={functions?.handleSelectOption} 
                dropdownOptions={state?.filteredOptions} 
                userSearchTerm={state?.searchText}
                createOption={functions?.handleCreateOption}
            />
        </div>
  )
}

export default ActiveInput;