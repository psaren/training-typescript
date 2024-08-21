import { myHeap } from '../src/myHeap';

describe('myHeap', () => {
  let heap: myHeap<number>;

  beforeEach(() => {
    heap = new myHeap<number>();
  });

  test('should create an empty heap', () => {
    expect(heap.size()).toBe(0);
    expect(heap.isEmpty()).toBe(true);
  });

  test('should push elements and maintain heap property', () => {
    heap.push(5);
    heap.push(5);
    heap.push(3);
    heap.push(7);
    heap.push(1);

    expect(heap.size()).toBe(5);
    expect(heap.peek()).toBe(7);
  });

  test('should pop elements in correct order', () => {
    heap.push(5);
    heap.push(3);
    heap.push(7);
    heap.push(1);

    expect(heap.pop()).toBe(7);
    expect(heap.pop()).toBe(5);
    expect(heap.pop()).toBe(3);
    expect(heap.pop()).toBe(1);
    expect(heap.isEmpty()).toBe(true);
  });

  test('should handle custom compare function', () => {
    const minHeap = new myHeap<number>((a, b) => b - a);
    minHeap.push(5);
    minHeap.push(3);
    minHeap.push(7);
    minHeap.push(1);

    expect(minHeap.peek()).toBe(1);
    expect(minHeap.pop()).toBe(1);
    expect(minHeap.pop()).toBe(3);
    expect(minHeap.pop()).toBe(5);
    expect(minHeap.pop()).toBe(7);
  });

  test('should return undefined when popping from empty heap', () => {
    expect(heap.pop()).toBeUndefined();
  });
});