import { render, screen } from '@testing-library/react';

import CardTop from './CardTop';

describe("CardTop", () => {
    test('renders CardTop component correctly', () => {
        render(<CardTop />);

        expect(screen.getByText('Cases')).toBeInTheDocument();

        expect(screen.getByText('Deaths')).toBeInTheDocument();
        
        expect(screen.getByText('Recovered')).toBeInTheDocument();
    })
});