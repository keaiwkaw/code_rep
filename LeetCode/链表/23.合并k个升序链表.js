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
var mergeKLists = function (lists) {
  function mergeTwoLists(l1, l2) {
    if (l1 == null || l2 == null) {
      return l1 ? l1 : l2;
    }
    if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  }
  function merge(low, hight) {
    let mid = Math.floor((low + hight) / 2);
    let l1 = merge(low, mid);
    let l2 = merge(mid + 1, hight);
    return mergeTwoLists(l1, l2);
  }
  return merge(0, n - 1);
};

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
