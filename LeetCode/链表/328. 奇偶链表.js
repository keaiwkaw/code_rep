/* 
看到这道题，我想起来之前做的 86.分割链表。
思路一样:
  1. 我维护2个链表奇数序，和偶数序号
  2. 我将这两个链表进行合并
*/
var oddEvenList = function (head) {
  let oddHead = (odd = new ListNode(0));
  let evenHead = (even = new ListNode(0));
  let dummy = new ListNode(0, head);
  let p = dummy;
  while (p && p.next) {
    odd.next = p.next;
    odd = odd.next;
    even.next = p.next.next;
    even = even.next;
    p = even;
  }
  odd.next = evenHead.next;
  return oddHead.next;
};
