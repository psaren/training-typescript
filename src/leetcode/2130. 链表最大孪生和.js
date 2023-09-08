/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// 快慢指针 + 翻转链表

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let max = 0;
  slow = slow.next;
  let reverseSlow = reverseList(slow);
  while (reverseSlow) {
    max = Math.max(max, head.val + reverseSlow.val);
    reverseSlow = reverseSlow.next;
    head = head.next;
  }
  return max;
}



// head = [5, 4, 2, 1]
// slow = 5, fast = 4
// slow = 4, fast = 1
// head = {
//   val: 1,
//   next: {
//     val: 10000,
//   }
// }

head = {
  val: 5,
  next: {
    val: 4,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null
      }
    }
  },
}

console.log('first', pairSum(head))