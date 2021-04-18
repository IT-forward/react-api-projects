import Response from '../Components/Response';
import { render, screen, act } from '@testing-library/react';

describe('<Response />', () => {
    test('Response component should mount', () => {
        render(<Response />);
    });

    test('fetch function works correctly', async () => {
        global.fetch = jest.fn(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                main: {
                    temp: 285.15,
                },
                weather: [
                    {
                        description: 'sunny',
                    },
                ],
                name: 'Tashkent',
            }),
        }));

        await act(async () => render(<Response cityName="tashkent" />));
        expect(screen.getByTestId('weather-info-div').textContent).toBe('Tashkent12°Csunny');
    });

    test('fetch function works correctly', async () => {
        global.fetch = jest.fn(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                main: {
                    temp: 268.15,
                },
                weather: [
                    {
                        description: 'rainy',
                    },
                ],
                name: 'Moscow',
            }),
        }));

        await act(async () => render(<Response cityName="moscow" />));
        expect(screen.getByTestId('weather-info-div').textContent).toBe('Moscow-5°Crainy');
    });

    test('if fetch function returns bad response', async () => {
        await act(async () => render(<Response />));

        expect(screen.getByTestId('weather-info-div').textContent).toBe('');
    });
});