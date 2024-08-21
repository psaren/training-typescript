export class myHeap<T> {
  private compare: (a: T, b: T) => number;
  private heap: T[];

  constructor(compare?: (a: T, b: T) => number) {
    this.compare = compare || this.defaultCompare;
    this.heap = [];
  }

  private defaultCompare(a: T, b: T): number {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  // 左子节点索引
  private left(i: number): number {
    return 2 * i + 1;
  }

  // 右子节点索引
  private right(i: number): number {
    return 2 * i + 2;
  }

  // 父节点索引
  private parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  // 访问堆顶元素
  peek(): T | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  // 交换节点
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  /* 元素入堆 */
  push(val: T): void {
    // 添加节点
    this.heap.push(val);
    // 从底至顶堆化
    this.siftUp(this.size() - 1);
  }

  /* 从节点 i 开始，从底至顶堆化 */
  private siftUp(i: number): void {
    while (i > 0) {
      const p = this.parent(i);
      if (this.compare(this.heap[i], this.heap[p]) <= 0) break;
      this.swap(i, p);
      i = p;
    }
  }

  /* 元素出堆 */
  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    
    if (this.size() === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.siftDown(0);
    return top;
  }

  /* 从节点 i 开始，从顶至底堆化 */
  private siftDown(i: number): void {
    const n = this.size();
    while (true) {
      let largest = i;
      const l = this.left(i);
      const r = this.right(i);

      if (l < n && this.compare(this.heap[l], this.heap[largest]) > 0) {
        largest = l;
      }
      if (r < n && this.compare(this.heap[r], this.heap[largest]) > 0) {
        largest = r;
      }

      if (largest === i) break;

      this.swap(i, largest);
      i = largest;
    }
  }
}
