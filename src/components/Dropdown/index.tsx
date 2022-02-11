import React from 'react';
import './Dropdown.styles.css';

interface DropdownProps {
    handleOnSelect: (value:string) => void;
    dropdownOptions: string[]
}

const Dropdown = ({handleOnSelect, dropdownOptions}: DropdownProps): JSX.Element => {
    
                       
    return (
        <div className='dropdown'>
            {dropdownOptions.length > 0 ? (
                <ul>
                    {dropdownOptions.map((value, idx) => (
                        <li key={idx} className='dropdown-item' onClick={() => handleOnSelect(value)}>{value}</li>
                    ))}
                </ul>
                
            ) : (
                <p>No Results</p>
            )}
            
        </div>
    );
}

export default Dropdown;