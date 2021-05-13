/* 
递归遍历左右子树 如果根是空结束返回true
根不为空，分别遍历左右子树
*/
var isValidBST = function (root) {
  return helper(root, -Infinity, Infinity);
};
function helper(root, lower, upper) {
  if (root == null) return true;
  if (root.val <= lower || root.val >= upper) return false;
  return (
    helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
  );
}
/* 
中序遍历
二叉搜索树中序遍历的结果一定是升序的，如果出现后面的节点小于等于前面的节点，那么一定不是二叉搜索树

二叉树的遍历好牛嗷~
 */
var isValidBST = function (root) {
  let stack = [];
  let inorder = -Infinity;
  while (stack.length || root) {
    while (!root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop(); //将节点拿出来比较
    if (root.val <= inorder) {
      return false;
    }
    inorder = root.val;
    root = root.right;
  }
};
