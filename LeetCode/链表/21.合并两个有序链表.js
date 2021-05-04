/* 
生成一个cur，根据l1/l2.val的大小，往cur.next后面接
*/

var mergeTwoLists = function (l1, l2) {
  let cur = new ListNode();
  let dummy = cur;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (!l1) {
    cur.next = l2;
  }
  if (!l2) {
    cur.next = l1;
  }
  return dummy.next;
};
