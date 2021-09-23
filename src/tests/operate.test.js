import { render, screen } from '@testing-library/react';
import operate from '../logic/operate';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

beforeEach(() => {
  render(<Calculator />);
});

describe('Testing operate.js', () => {
  test('Adding 1 and 2 equals to 3', () => {
    const firstNumber = 1;
    const secondNumber = 2;
    const operationPlus = '+';
    expect(operate(firstNumber, secondNumber, operationPlus)).toBe('3');
  });
  test('Subtracting 1 from 2 equals to -1', () => {
    const firstNumber = 1;
    const secondNumber = 2;
    const operationMinus = '-';
    expect(operate(firstNumber, secondNumber, operationMinus)).toBe('-1');
  });
  test('3 times 4 equals to 12', () => {
    const firstNumber = 3;
    const secondNumber = 4;
    const operationMultiply = 'x';
    expect(operate(firstNumber, secondNumber, operationMultiply)).toBe('12');
  });
});
