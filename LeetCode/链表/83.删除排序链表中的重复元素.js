/* 
这个和上一个删除的不同，删除的是重复的
这个需要注意的是：先判断head是否存在，不然cur.next会报错
*/

var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let cur = head;
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};
