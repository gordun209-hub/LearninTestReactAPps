import { render, screen } from '@testing-library/react';
import App from './App';

test('inputs should be initially empty', () => {
  render(<App />);
 const passwordElement = screen.getByRole('textbox')
  expect(passwordElement.value).toBe('');
});
