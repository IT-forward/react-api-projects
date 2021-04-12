import {render, screen} from '@testing-library/react';
import List from './List';

describe('List', () => {
    test('renders List component', () => {
        const { container } = render(<List />);

        expect(container.querySelector('.card-title')).toBeInTheDocument();
    });
});