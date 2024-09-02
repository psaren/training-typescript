import { curry } from '../src/curry';

describe('curry function', () => {
  function sum(a, b, c) {
    return a + b + c;
  }

  const curriedSum = curry(sum);

  it('should return the correct result when called with all arguments', () => {
    expect(curriedSum(1, 2, 3)).toBe(6);
  });

  it('should return a function when called with partial arguments', () => {
    expect(typeof curriedSum(1)).toBe('function');
    expect(typeof curriedSum(1, 2)).toBe('function');
  });

  it('should return the correct result when called with partial arguments', () => {
    expect(curriedSum(1)(2, 3)).toBe(6);
    expect(curriedSum(1)(2)(3)).toBe(6);
  });

  it('should work with different argument combinations', () => {
    expect(curriedSum(1, 2)(3)).toBe(6);
    expect(curriedSum()(1)(2)(3)).toBe(6);
  });
});
