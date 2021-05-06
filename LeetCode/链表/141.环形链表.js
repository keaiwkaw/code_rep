/* 
我想的是通过数组的findIndex查一下，结果超时了
访问过的存起来，如果已经访问过，返回true
*/
//哈希表法
var hasCycle = function (head) {
  let map = new Set();
  while (head) {
    if (!map.has(head)) {
      map.add(head);
    } else {
      return true;
    }
    head = head.next;
  }
  return false;
};
//快慢指针
/* 
快指针先处于head.next 慢指针先在head 
快指针一次走2步，慢指针一次走一步，
如果有环，那么快指针肯定会遇到慢指针
为什么快指针要一次走两步？走两步才会到环的开始
为什么快指针先要比慢指针快一步？
*/
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  let fast = head.next;
  let slow = head;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
