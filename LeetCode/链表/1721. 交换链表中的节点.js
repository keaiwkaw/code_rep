/* 
我先想到数组，那么我就用数组来做一下!
*/
var swapNodes = function (head, k) {
  let dummy = new ListNode();
  dummy.next = head;
  let stack = [];
  while (head) {
    stack.push(head);
    head = head.next;
  }
  let temp = stack[k - 1].val;
  stack[k - 1].val = stack[stack.length - k].val;
  stack[stack.length - k].val = temp;
  return dummy.next;
};
/* 
数组真香，下面我用双指针来写

正数k个，当指针走到结束时，从头开始走的指针就刚走到倒数第K个:

假设全长是d ,快指针先走了 k，为第一个位置记下
慢指针走了剩下的距离 d-k ，那么离结尾的距离就是d-(d-k） = k
所以可行！
*/
var swapNodes = function (head, k) {
  let dummy = new ListNode();
  dummy.next = head;
  let fast = (slow = head);
  while (--k) {
    fast = fast.next;
  }
  let first = fast; //第一个位置
  while (fast.next) {
    //是否到了最后了 ，如果判断的是fast ，slow会多走一步
    fast = fast.next;
    slow = slow.next;
  }
  let second = slow; //第二个位置
  let t = first.val;
  first.val = second.val;
  second.val = t;
  return dummy.next;
};
