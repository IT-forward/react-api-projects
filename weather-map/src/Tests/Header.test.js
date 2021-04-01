import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from '../Components/Header';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

// working test
it('renders with or without a header', () => {
    act(() => {
        render(<Header />, container);
    });
    expect(container.textContent).toBe('OpenWeather Map');
});