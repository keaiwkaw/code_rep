/*
题目挺长emm 

hh不会写
我看题解了：
从前往后遍历链表，先将val next 赋值 ，将当前创建的节点加入到map中去
第二次遍历原来链表根据head.random 取map中找，

 */

var copyRandomList = function (head) {
  if (!head) {
    return head;
  }
  let newHead = new ListNode();
  let temp = newHead;
  let map = new Map();
  let cur = head;
  while (cur) {
    // 遍历原来链表
    temp.val = cur.val;
    temp.next = cur.next ? new ListNode() : null;
    map.set(cur, temp); //把当前节点存入map中
    temp = temp.next; // 往前跳
    cur = cur.next; // 往前跳
  }
  temp = newHead;
  while (head) {
    //遍历原来链表
    temp.random = head.random ? map.get(head.random) : null;
    head = head.next; // 往前跳
    temp = temp.next; // 往前跳
  }
  return newHead;
};
