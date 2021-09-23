import calculate from '../logic/calculate';
import '@testing-library/jest-dom';

describe('Test calculate.js', () => {
  test('Test divide function in calculate', () => {
    let obj = {
      total: null,
      next: null,
      operation: null,
    };
    obj = calculate(obj, '8');
    obj = calculate(obj, '÷');
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('4');
  });
  test('Test multiplication function in calculate', () => {
    let obj = {
      total: null,
      next: null,
      operation: null,
    };
    obj = calculate(obj, '8');
    obj = calculate(obj, 'x');
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('16');
  });
  test('Test plus function in calculate', () => {
    let obj = {
      total: null,
      next: null,
      operation: null,
    };
    obj = calculate(obj, '8');
    obj = calculate(obj, '+');
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('10');
  });
  test('Test minus function in calculate', () => {
    let obj = {
      total: null,
      next: null,
      operation: null,
    };
    obj = calculate(obj, '8');
    obj = calculate(obj, '-');
    obj = calculate(obj, '2');
    obj = calculate(obj, '=');
    expect(obj.total).toEqual('6');
  });
});
