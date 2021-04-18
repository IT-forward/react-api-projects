import { render, screen, act } from '@testing-library/react';

import CardTop from './CardTop';

describe("CardTop", () => {
    test('renders CardTop component correctly', () => {
        render(<CardTop />);

        expect(screen.getByText('Cases')).toBeInTheDocument();

        expect(screen.getByText('Deaths')).toBeInTheDocument();

        expect(screen.getByText('Recovered')).toBeInTheDocument();
    })
});

describe("Fetch CardTop", () => {
    test('fetch works', async () => {
        global.fetch = jest.fn(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                cases: 141408657,
                deaths: 3026367,
                recovered: 120222502
            }),
        }));

        await act(async () => render(<CardTop />));
        expect(screen.getByTestId('cases-n').textContent).toBe('141408657');
        expect(screen.getByTestId('deaths-n').textContent).toBe('3026367');
        expect(screen.getByTestId('recovered-n').textContent).toBe('120222502');
    });
});