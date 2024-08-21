import { bubbleSort } from '../../src/sort/bubbleSort'

describe('bubbleSort test', () => {
  it('should sort an array of numbers in ascending order', () => {
    expect(bubbleSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  it('should return an empty array when given an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('should return the same array when given an array with one element', () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('should correctly sort an array with duplicate elements', () => {
    expect(bubbleSort([3, 3, 3, 1, 2, 2])).toEqual([1, 2, 2, 3, 3, 3]);
  });

  it('should correctly sort an already sorted array', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort a reverse sorted array', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with negative numbers', () => {
    expect(bubbleSort([-3, 4, -1, -5, 2])).toEqual([-5, -3, -1, 2, 4]);
  });

  it('should handle an array with floating point numbers', () => {
    expect(bubbleSort([3.14, 2.71, 1.41, 1.73])).toEqual([1.41, 1.73, 2.71, 3.14]);
  });
});
