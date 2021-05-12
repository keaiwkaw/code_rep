/* 
首先我想到的是-找中点-反转后半段-前后对比

*/
var isPalindrome = function (head) {
  //找中点
  let fast = head,
    slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let mid = slow.next;
  slow.next = null;
  //反转后半段链表
  let pre = null;
  let cur = mid;
  while (cur) {
    // let temp = cur;
    // cur = cur.next;
    // temp.next = pre;
    // pre = cur;
    //上面注释部分是我写的反转链表答案一直错
    let nextTemp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nextTemp;
  }
  //前后对比
  while (head && pre) {
    if (head.val != pre.val) return false;
    head = head.next;
    pre = pre.next;
  }
  return true;
};
/* 
简单的方法是将链表存入数组，根据下标来判断
*/
/* 
还有种递归方法，以后再学吧
*/