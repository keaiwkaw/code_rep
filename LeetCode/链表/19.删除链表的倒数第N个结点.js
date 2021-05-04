/* 
第一种想到的就是求出链表的长度然后求出正向删除第几个节点
第一种就是利用栈的先进后出特点删除第n个节点
上面的两种不难想到

第三种--快慢指针
快指针慢指针同时指向head
快指针先向前走n---快指针比慢指针超前n个
当快指针遍历到链表尾时，慢指针就在倒数第n+1个

由于要删除倒数第n个，所以要找的不是倒数第n个，而是倒数第n+1个
*/

var removeNthFromEnd = function (head, n) {
  let pre = new ListNode(-1, head); //这里声明一个头指针，防止下面fast.next报错
  let fast = (slow = pre);
  while (n--) {
    fast = fast.next; // 如果没有头指针，这段代码执行完后fast就会为null，下面的代码就会报错
  }
  while (fast.next) {
    //
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return pre.next;
};
