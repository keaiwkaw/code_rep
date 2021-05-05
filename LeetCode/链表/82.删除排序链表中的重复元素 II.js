/* 
删除链表中重复的数字，只保留没有重复出现的数字。。。。
第一次我做成了删除重复项。。。

*/

var deleteDuplicates = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let slow = (fast = dummy.next);
  while (fast && fast.next) {
    if (fast.val != fast.next.val) {
      slow.next = fast.next;
      slow = slow.next;
    }
    fast = fast.next;
  }
  return dummy.next;
};
/* 
出现重复节点，循环删除重复节点
注意：循环成立的条件
*/
var deleteDuplicates = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let x = cur.next.val;
      while (cur.next && cur.next.val == x) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};
