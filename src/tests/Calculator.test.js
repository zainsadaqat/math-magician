import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

beforeEach(() => {
  render(<Calculator />);
});

describe('Test Calculator Buttons', () => {
  test('Button 7 to be in the document', () => {
    const elementSeven = screen.getByTestId('seven');
    expect(elementSeven).toBeInTheDocument();
  });
});
