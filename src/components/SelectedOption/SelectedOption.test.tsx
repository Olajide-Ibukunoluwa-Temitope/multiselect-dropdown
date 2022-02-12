import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectedOption from '.';

describe('SelectedOption',  () => {
    it('should render component without crashing', () => {
        render(<SelectedOption option='Mark' />);
    
        expect(screen).toBeTruthy();
    });

    it('should contain correct text in component as passed in props', () => {
        render(<SelectedOption option='Mark' />);
        const element = screen.getByText(/mark/i);

        expect(element).toBeInTheDocument();
    });

    it('should contain button in component', () => {
        render(<SelectedOption option='Mark' />);
        const element = screen.getByRole('button');

        expect(element).toBeDefined();
    })
})

