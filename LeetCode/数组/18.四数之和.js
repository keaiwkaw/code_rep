/* 
三数之和是固定一个a
四数之和固定两个 a b
其他的按3数之和的步骤
这里把while循环里直接写上c或者d的自加，省好多行代码，不像16题一样

*/

var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let a, b, c, d, sum;
  let res = [];
  for (a = 0; a < len - 3; a++) {
    //固定a  后面有3个数（b,c,d），所以减3
    if (a > 0 && nums[a] == nums[a - 1]) continue;
    for (b = a + 1; b < len - 2; b++) {
      //固定b 后面有2个数（c,d），所以减2
      if (b > a + 1 && nums[b] == nums[b - 1]) continue; // 看好判断条件 下一个不等于上一个
      c = b + 1;
      d = len - 1;
      while (c < d) {
        sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum > target) {
          while (c < d && nums[d] == nums[--d]); //自减
        } else if (sum < target) {
          while (c < d && nums[c] == nums[++c]); //自加
        } else {
          res.push([nums[a], nums[b], nums[c], nums[d]]);
          while (c < d && nums[c] == nums[++c]); //如果指针指的数相等，就移动指针，防止res中出现相同的数
          while (c < d && nums[d] == nums[--d]);
        }
      }
    }
  }
  return res;
};

console.log(fourSum([2, 2, 2, 2, 2]));
