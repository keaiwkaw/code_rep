/* 
emm 我第一反应是遍历链表，将小于x的放入队列 ，大于x的放入队列 然后两个相连。。。
题解是在原链表上维护两个链表，我还是太笨了
*/
var partition = function (head, x) {
  let smallHead = (small = new ListNode(0));
  let largeHead = (large = new ListNode(0));
  while (head) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      large.next = head;
      large = large.next;
    }
    head = head.next;
  }
  large.next = null;
  small.next = largeHead.next;
  return smallHead.next;
};
