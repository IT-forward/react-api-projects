import Header from '../Components/Header';
import { render, screen } from '@testing-library/react';

describe('<Header />', () => {
    test('heading should not be empty', () => {
        render(<Header />);
        const heading = screen.getByTestId('custom-element');

        expect(heading.textContent).not.toHaveLength(0);
    });

    // test('heading should the same excatly text', () => {
    //     render(<Header />);
    //     const heading = screen.getByTestId('custom-element');

    //     expect(heading.textContent).toBe('OpenWeather Map');
    // });
});