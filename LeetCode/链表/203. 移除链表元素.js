var removeElements = function (head, val) {

  let dummy = new ListNode()
  dummy.next = head;
  let cur = head;
  let pre = dummy;
  while (cur) {
    if (cur.val == val) {
      pre.next = cur.next
    } else {
      pre = cur
    }
    cur = cur.next;
  }
  return dummy.next
};
