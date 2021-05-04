/* 
之前做过合并两个链表的题
合并多个链表就是将12合并后的结果和3继续合并以此类推
*/

var mergeKLists = function (lists) {
  let ans = null;
  var mergeTwoLists = function (l1, l2) {
    let cur = new ListNode();
    let dummy = cur;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    if (!l1) {
      cur.next = l2;
    }
    if (!l2) {
      cur.next = l1;
    }
    return dummy.next;
  };
  for (let i = 0; i < lists.length; i++) {
    ans = mergeTwoLists(ans, lists[i]);
  }
  return ans;
};

/* 
分治法合并

*/

/* 
看到一个用js reduce sort reduceRight API解本道题的方法😂
先扁平化，再重新排序，再重新组合成链表
*/
var mergeKLists = function (lists) {
  return lists
    .reduce((p, n) => {
      while (n) {
        p.push(n), (n = n.next);
      }
      return p;
    }, [])
    .sort((a, b) => a.val - b.val)
    .reduceRight((p, n) => ((n.next = p), (p = n), p), null);
};
//惊了，这写法太简洁了吧~(p, n) => (n.next = p, p = n, p) 🐂
