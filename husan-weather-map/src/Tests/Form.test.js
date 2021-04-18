import Form from '../Components/Form';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<Form />', () => {
    test("input's initial value should be empty", () => {
        render(<Form />);
        const input = screen.getByRole('textbox');

        expect(input.value).toBe('');
    });

    test("input's value should update correctly", () => {
        render(<Form />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'tashkent' } });

        expect(input.value).toBe('tashkent');
    });


    test('handleSubmit function should be called', () => {
        const onSubmit = jest.fn();
        render(<Form handleSubmit={onSubmit} />);
        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(onSubmit).toHaveBeenCalled();
    });

    test('handleSubmit function should be called when input\'s value updates', () => {
        const onSubmit = jest.fn();
        render(<Form handleSubmit={onSubmit} />);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');

        fireEvent.change(input, { target: { value: '2032' } });
        fireEvent.click(button);

        expect(onSubmit).toHaveBeenCalled();
    });
});