/* 
第一种容易想到的就是将链表先存起来，根据下标来设置谁连接着谁
*/

var reorderList = function (head) {
  let stack = [];
  while (head) {
    stack.push(head);
    head = head.next;
  }
  let i = 0,
    j = stack.length - 1;
  let dummy = stack[i];
  while (i < j) {
    stack[i].next = stack[j];
    i++;
    if (i == j) break;
    stack[j].next == stack[i];
    j--;
  }
  stack[i].next = null;
  return dummy;
};
/* 
第二种 寻找链表中点 + 链表逆序 + 合并链表
将链表分成2段，右半段逆序 ，然后按顺序合并两个链表
*/
var reorderList = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let l1 = head;
  let mid = findMidList(head);
  let l2 = mid.next;
  mid.next = null;
  l2 = reverseList(l2);
  mergeList(l1, l2);
  return dummy.next;
  function findMidList(head) {
    let fast = head.next,
      slow = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  function reverseList(head) {
    let low = null;
    let cur = head;
    while (cur) {
      let temp = cur;
      cur = cur.next;
      temp.next = low;
      low = temp;
    }
    return low;
  }
  function mergeList(left, right) {
    while (left && right) {
      let lNext = left.next;
      let rNext = right.next;
      right.next = left.next;
      left.next = right;
      left = lNext;
      right = rNext;
    }
  }
};
