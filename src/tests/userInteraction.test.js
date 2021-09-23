import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator, { generateResult } from '../components/Calculator';

beforeEach(() => {
  render(<Calculator />);
});

test('should test user interaction', () => {
  const obj = {
    total: 0,
    next: 0,
    operation: null,
  };
  const buttonAC = screen.getByTestId('AC');
  fireEvent.click(buttonAC);
  expect(generateResult(obj, buttonAC)).toEqual(obj.total);
});
