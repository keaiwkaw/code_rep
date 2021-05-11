/* 
最简单的就是给把每个都存入hashmap中，
遇到重复的返回就好
*/

var detectCycle = function (head) {
  let map = new Set();
  while (head) {
    if (!map.has(head)) {
      map.add(head);
    } else {
      return head;
    }
    head = head.next;
  }
  return null;
};

/* 
题目要求空间复杂度为o(1)！！！

环形链表1使用的是判圈算法！
其实快慢指针之间存在关系----，设链表中环外部分的长度为 a。slow 指针进入环后，又走了 b 的距离与 fast 相遇。
此时，fast 指针已经走完了环的 n 圈，
因此它（fast）走过的总距离为 a+n(b+c)+b=a+(n+1)b+nc
任意时刻，fast 指针走过的距离都为 slow 指针的 2 倍。因此，我们有

a+(n+1)b+nc=2(a+b) => a=c+(n-1)(b+c)

从相遇点到入环点的距离加上n-1圈的环长，恰好等于从链表头部到入环点的距离

想象下 当慢指针刚入环时，快指针比慢指针先走l步，
假设圈的大小为d ，则快指针要追赶上慢指针 需要多走 d - l 步 ，
当快慢指针相遇 慢指针走了d-l步  
所以剩下的距离就是l，
从开头到刚入环的距离也是l


*/
var detectCycle = function(head) {
  if (head === null) {
      return null;
  }
  let slow = head, fast = head;
  while (fast !== null) {
      slow = slow.next;
      if (fast.next !== null) {
          fast = fast.next.next;
      } else {
          return null;
      }
      if (fast === slow) {
          let ptr = head;
          while (ptr !== slow) {
              ptr = ptr.next;
              slow = slow.next;
          }
          return ptr;
      }
  }
  return null;
};
