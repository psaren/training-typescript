class Heap {
  constructor(compare) {
    this.heap = [];
    this.compare = compare || this.defaultCompare;
  }
  defaultCompare(a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.heap[0];
  }
  push(val) {
    this.heap.push(val);
    this.siftUp(this.size() - 1);
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  siftUp(i) {
    while (true) {
      const p = this.parent(i);
      if (p >= 0 && this.compare(this.heap[i], this.heap[p]) > 0) {
        this.swap(i, p);
        i = p;
      } else {
        break;
      }
    }
  }
  pop() {
    // 判空处理
    if (this.isEmpty()) throw new RangeError('Heap is empty.');
    // 交换根节点与最右叶节点（交换首元素与尾元素）
    this.swap(0, this.size() - 1);
    // 删除节点
    const val = this.heap.pop();
    // 从顶至底堆化
    this.siftDown(0);
    // 返回堆顶元素
    return val;
  }
  /* 从节点 i 开始，从顶至底堆化 */
  siftDown(i) {
    while (true) {
      // 判断节点 i, l, r 中值最大的节点，记为 ma
      const l = this.left(i),
        r = this.right(i);
      let ma = i;
      if (l < this.size() && this.compare(this.heap[l], this.heap[ma]) > 0) ma = l;
      if (r < this.size() && this.compare(this.heap[r], this.heap[ma]) > 0) ma = r;
      // 若节点 i 最大或索引 l, r 越界，则无须继续堆化，跳出
      if (ma === i) break;
      // 交换两节点
      this.swap(i, ma);
      // 循环向下堆化
      i = ma;
    }
  }
}