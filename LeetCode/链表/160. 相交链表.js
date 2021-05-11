/* 
自然而然的想到，先把一个存起来
遍历另一个 并查找set 中是否有节点
*/

var getIntersectionNode = function (headA, headB) {
  let set = new Set();
  while (headA) {
    set.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
};
/* 
双指针法
为什么最后能相遇，因为他们走过的长度是一样的,
我回过头来把你的路走一走，你回过头来把我的路走一走，我们之间的差距就消失了
*/
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let newHeadA = headA;
  let newHeadB = headB;
  while (newHeadA != newHeadB) {
    if (newHeadA != null) {
      newHeadA = newHeadA.next;
    } else {
      newHeadA = headB;
    }
    if (newHeadB != null) {
      newHeadB = newHeadB.next;
    } else {
      newHeadB = headA;
    }
  }
  return newHeadA;
};
