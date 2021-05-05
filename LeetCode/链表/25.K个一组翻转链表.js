/* 
这道题看题解写下来，思路不难，但是反转链表那又是一个新的方法
都是先反转后拼接
*/

var reverseKGroup = function (head, k) {
  function myReverse(head, tail) {
    let pre = tail.next; //pre是处理前正在处理节点的前一个
    let p = head;
    while (pre !== tail) {
      const nex = p.next; //nex缓存下一个节点
      p.next = pre; //
      pre = p;
      p = nex;
    }
    return [tail, head];
  }
  let hair = new ListNode();
  hair.next = head;
  let pre = hair;
  while (head) {
    let tail = pre;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        //是否满足K个连续
        return hair.next;
      }
    }
    const nex = tail.next; //nex为tail的下一个
    [head, tail] = myReverse(head, tail);
    //
    pre.next = head; //重新连接链表
    tail.next = nex;
    pre = tail; //更新pre和tail
    head = tail.next;
  }
  return hair.next;
};
