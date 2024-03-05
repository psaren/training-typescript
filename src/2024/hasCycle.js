class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const hasCycle = (node) => {
  if (node === null || node.next === null) {
    return false;
  }
  let slow = node.next;
  let fast = node.next.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

const A = new ListNode(1);
const B = new ListNode(2);
const C = new ListNode(3);
A.next = B;
B.next = A;
console.log(hasCycle(A));
console.log(hasCycle(C));