import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from '.';

describe('Dropdown',  () => {
    let handleOnSelect: jest.Mock;
    let dropdownOptions: string[];
    let userSearchTerm: string;
    let createOption: jest.Mock;


    beforeEach(() => {
        handleOnSelect = jest.fn();
        dropdownOptions = ['opt1', 'opt2', 'opt3', 'opt4', 'opt5'];
        userSearchTerm = '';
        createOption = jest.fn();

        render(
            <Dropdown 
                handleOnSelect={handleOnSelect} 
                dropdownOptions={dropdownOptions} 
                userSearchTerm={userSearchTerm}
                createOption={createOption}
            />
        );
    })

    it('should render component without crashing', () => {

        expect(screen).toBeDefined();
    });

    it('should contain option has provided in dropdownOptions prop', () => {
        const element = screen.getByText(/opt2/i);
        
        expect(element).toBeInTheDocument();
    });

    it('should have handleOnSelect called once on click of element', () => {
        const element = screen.getByText(/opt1/i);
        
        fireEvent.click(element);

        expect(handleOnSelect).toHaveBeenCalledTimes(1);
    });
})

