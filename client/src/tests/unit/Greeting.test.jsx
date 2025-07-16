import { render, screen } from '@testing-library/react';
import Greeting from '../../components/Greeting';

test('renders greeting with name', () => {
  render(<Greeting name="Kat" />);
  expect(screen.getByText('Hello, Kat')).toBeInTheDocument();
});
