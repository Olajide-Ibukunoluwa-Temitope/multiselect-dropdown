import React from 'react';
// import { MultiSelectContext } from '../../context/MultiSelectContext';
import './Dropdown.styles.css';

interface DropdownProps {
    handleOnSelect: (value:string) => void;
    dropdownOptions: string[];
    userSearchTerm: string;
    createOption: (opt:string) => void;
}

const Dropdown = ({handleOnSelect, dropdownOptions, userSearchTerm, createOption}: DropdownProps): JSX.Element => {   
    return (
        <div className='dropdown'>
            <ul>
                {dropdownOptions.map((value, idx) => (
                    <li key={idx} className='dropdown-item' onClick={() => handleOnSelect(value)}>{value}</li>
                ))}
                {userSearchTerm.length > 0 && <li className='dropdown-item' onClick={() => createOption(userSearchTerm)}><span>Create</span> {userSearchTerm}</li>}
            </ul>
        </div>
    );
}

export default Dropdown;