import { render, screen, fireEvent  } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Search from './Search';

describe('Search', () => {
    test("calls the onChange callback handler", () => {
        const onChange = jest.fn();

        render(
            <Search onChange={onChange}/>
        );

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'Uzbekistan' },
        });

        expect(onChange).toHaveBeenCalledTimes(1);
    });

    test("input value is updated correctly", () => {
        render(<Search />);

        const input = screen.getByRole('textbox');
        UserEvent.type(input, 'uzb');

        expect(input.value).toBe('uzb');
    });
})