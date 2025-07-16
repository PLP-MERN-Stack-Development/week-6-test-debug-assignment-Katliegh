import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, name: 'Test Item' }])
    })
  );
});

afterEach(() => {
  global.fetch.mockRestore();
});

test('loads and displays items', async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });
});
