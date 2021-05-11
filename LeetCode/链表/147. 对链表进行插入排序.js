var insertionSortList = function (head) {
  if (!head) {
    return head;
  }
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let lastSorted = head; //排好链表的最后一个节点
  let cur = head.next;
  while (cur != null) {
    if (lastSorted.val <= cur.val) {
      lastSorted = lastSorted.next; //前面元素比当前元素小，不用排序
    } else {
      let prev = dummyHead; //需要把移动到合适的位置，用prev记录满足比cur大的元素
      while (prev.next.val <= cur.val) {
        prev = prev.next;
      }
      lastSorted.next = cur.next; //将链表接上（将cur独立出来）
      cur.next = prev.next; //将cur放到prev后面
      prev.next = cur; //将pre 和cur连起来
    }
    cur = lastSorted.next; //更新当前要判断的元素
  }
  return dummyHead.next;
};
