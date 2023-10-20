import { fireEvent, render, screen } from '@testing-library/react';
// import { render } from '@testing-library/react';
import Count from './Count';
test('should render the default counter value 10', () => {
    render(<Count />);
    const counterText = screen.getByText('10');
    expect(counterText).toBeInTheDocument();
}
)

test('should render increment button', () => {
    render(<Count />);
    const incrementBtn = screen.getByRole('button', { name: 'Increment' });
    expect(incrementBtn).toBeInTheDocument();
})


test('when we click increment btn the value should be increased', () => {
    render(<Count />);
    const text = screen.getByText('10');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('10');
    const incrementBtn = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementBtn);
    expect(text).toHaveTextContent('11')
})


test('should render decrement button', () => {
    render(<Count />);
    const decrementBtn = screen.getByRole('button', { name: 'Decrement' });
    expect(decrementBtn).toBeInTheDocument();
})



test('when we click decrement btn the value should be decreased', () => {
    render(<Count />);
    const text = screen.getByText('10');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('10');
    const decrementBtn = screen.getByRole('button', { name: /Decrement/i });
    fireEvent.click(decrementBtn);
    expect(text).toHaveTextContent('9')
})