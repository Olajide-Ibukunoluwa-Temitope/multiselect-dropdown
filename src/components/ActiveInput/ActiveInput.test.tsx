import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ActiveInput from '.';
import { MultiSelectContext } from '../../context/MultiSelectContext';

describe('ActiveInput',  () => {
    let searchText: string;
    let filteredOptions: string[];
    let handleSelectOption: jest.Mock;
    let handleSearchTextChange: jest.Mock;
    let handleCreateOption: jest.Mock;

    const customRender = (ui: React.ReactNode, value: Record<string, any>) => {
        return render(
            <MultiSelectContext.Provider value={value}>
                {ui}
            </MultiSelectContext.Provider>
        )
    }


    beforeEach(() => {
        searchText = 'opt';
        filteredOptions = ['opt1', 'opt2', 'opt3', 'opt4', 'opt5'];
        handleSelectOption = jest.fn();
        handleSearchTextChange = jest.fn();
        handleCreateOption = jest.fn()

        const value = {
            state: {
                searchText,
                filteredOptions
              },
            functions: {
                handleSelectOption,
                handleSearchTextChange,
                handleCreateOption
            }
        }

        customRender(<ActiveInput />, value)
    })

    it('should render component without crashing', () => {

        expect(screen).toBeDefined();
    });

    it('should contain input field ', () => {
        const element = screen.getByRole('textbox');
        
        expect(element).toBeDefined();
    });

    it('should reflect value of input field has passed in my props', () => {
        const element = screen.getByRole('textbox');

        expect(element).toHaveAttribute("value", "opt");
    });
})

