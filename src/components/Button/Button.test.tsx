import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

describe('Button',  () => {
    it('should render component without crashing', () => {
        render(<Button btnText='test' handleClick={() => console.log('testing')} />);
    
        expect(screen).toBeTruthy();
    });

    it('should have the correct text in button as passed in props', () => {
        render(<Button btnText='test' handleClick={() => console.log('testing')} />);
        const element = screen.getByText(/test/i);

        expect(element).toBeInTheDocument();
    });

    it('should respond on button click', () => {
        const handleClick = jest.fn()
        render(<Button btnText='test' handleClick={handleClick} />);
        const element = screen.getByText(/test/i);

        fireEvent.click(element);
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})

