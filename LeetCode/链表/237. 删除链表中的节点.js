/* 
只有要删除的节点
没有要删除节点的前驱节点，所以直接删除不可能

可以删除node之后的节点；
将node后面节点的值复制给node ，然后删除node.next
*/

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
