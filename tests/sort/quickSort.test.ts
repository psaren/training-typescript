import { quickSort } from '../../src/sort/quickSort'

describe('quickSort test', () => {
  it('should sort an array of numbers in ascending order', () => {
    expect(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  it('should return an empty array when given an empty array', () => {
    expect(quickSort([])).toEqual([]);
  });

  it('should return the same array when given an array with one element', () => {
    expect(quickSort([1])).toEqual([1]);
  });

  it('should correctly sort an array with duplicate elements', () => {
    expect(quickSort([3, 3, 3, 1, 2, 2])).toEqual([1, 2, 2, 3, 3, 3]);
  });

  it('should correctly sort an already sorted array', () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should correctly sort a reverse sorted array', () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});