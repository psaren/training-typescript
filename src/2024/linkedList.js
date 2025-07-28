function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const arr = [1,2,3,4,5,6,7];

const createLinkedList = (arr) => {
  let head = new ListNode(arr[0]);
  let current = head;
  for(let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

const linkedList = createLinkedList(arr);

const reverseLinkedList = (head) => {
  let prev = null;
  let current = head; // current = 1
  while(current) {
    // 保存下一个节点
    let next = current.next; // next = 2
    // 将当前节点的next指向前一个节点
    current.next = prev; // current.next = null
    // 将前一个节点指向当前节点
    prev = current; // prev = 1
    // 将当前节点指向下一个节点
    current = next; // current = 2
  }
  return prev;
}

const result = reverseLinkedList(linkedList);

console.log('result', result);