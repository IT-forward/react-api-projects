import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Response from '../Components/Response';

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

it('renders weather info', async () => {
    const fakeInfo = {
        temp: '30',
        des: 'sunny',
    }

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeInfo)
        })
    );

    await act(async () => {
        render(<Response cityName='tashkent' />, container);
    });

    console.log(fakeInfo.temp);
    expect(container.querySelector("h1").textContent).toBe(fakeInfo.temp);
    expect(container.querySelector('h2').textContent).toBe(fakeInfo.des);

    global.fetch.mockRestore();
});