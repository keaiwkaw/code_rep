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


/* 
还是先了解一下判圈算法（Floyd Cycle Detection Algorithm）
算法描述
如果有限状态机、迭代函数或者链表存在环，那么一定存在一个起点可以到达某个环的某处(这个起点也可以在某个环上)。

初始状态下，假设已知某个起点节点为节点S。现设两个指针t和h，将它们均指向S。

接着，同时让t和h往前推进，但是二者的速度不同：t每前进1步，h前进2步。只要二者都可以前进而且没有相遇，就如此保持二者的推进。当h无法前进，即到达某个没有后继的节点时，就可以确定从S出发不会遇到环。反之当t与h再次相遇时，就可以确定从S出发一定会进入某个环，设其为环C。

如果确定了存在某个环，就可以求此环的起点与长度。

上述算法刚判断出存在环C时，显然t和h位于同一节点，设其为节点M。显然，仅需令h不动，而t不断推进，最终又会返回节点M，统计这一次t推进的步数，显然这就是环C的长度。

为了求出环C的起点，只要令h仍均位于节点M，而令t返回起点节点S，此时h与t之间距为环C长度的整数倍。随后，同时让t和h往前推进，且保持二者的速度相同：t每前进1步，h前进1步。持续该过程直至t与h再一次相遇，设此次相遇时位于同一节点P，则节点P即为从节点S出发所到达的环C的第一个节点，即环C的一个起点。
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
