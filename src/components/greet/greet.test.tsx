import {render, screen} from '@testing-library/react';
import Greet from './greet';

test('Greet renders correctly', () => {
    render(<Greet />);
    const textEl = screen.getByText('Hello');
    expect(textEl).toBeInTheDocument();
});

test('Greet with name renders correctly', () => {
    render(<Greet name="Manu" />);
    const textEl = screen.getByText('Hello Manu');
    expect(textEl).toBeInTheDocument();
});
