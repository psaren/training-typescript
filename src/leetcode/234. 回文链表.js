/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : fast.next;
  }
  // 翻转链表
  let temp;
  while (slow) {
    temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  while (head && prev) {
    if (head.val != prev.val) return false;
    head = head.next;
    prev = prev.next;
  }
};

// 输入：head = [1,2,2,1]
// 输出：true