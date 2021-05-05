/* 
将需要进行反转的链表段截取出来
记下left的前面和后面节点
反转后将链表重新拼接
> 反转链表参考第206题
注意：申请一个空头节点 当i从0开始 循环结束时 cur指向的是哪个节点
*/

var reverseBetween = function (head, left, right) {
  let dummy = new ListNode();
  dummy.next = head;
  let cur = dummy;
  let i = 0;
  for (; i < left - 1; i++) {
    cur = cur.next;
  }
  let FontLeftNode = cur;
  for (; i < right; i++) {
    cur = cur.next;
  }
  let BeforRightNode = cur.next;
  cur.next = null;
  let newHead = FontLeftNode.next;
  FontLeftNode.next = null;
  FontLeftNode.next = rever(newHead);
  newHead.next = BeforRightNode;
  return dummy.next;
  function rever(head) {
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
};
