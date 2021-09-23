import calculate from '../logic/calculate';
import '@testing-library/jest-dom';

describe('Test calculate.js', () => {
  test('Test divide method in calculate', () => {
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
  test('Test multiplication method in calculate', () => {
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
  test('Test plus method in calculate', () => {
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
});
