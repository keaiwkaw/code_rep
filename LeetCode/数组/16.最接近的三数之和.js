/* 思路：
  固定一个数，移动其他两个数 */

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b); //首先给数组排序，方便后面的双指针移动
  let b,
    c,
    a,
    sum,
    best = 1e7;
  function updateBest(sum) {
    if (Math.abs(sum - target) < Math.abs(best - target)) {
      best = sum; //根据绝对值来判断是否更改最接近的数
    }
  }
  for (a = 0; a < nums.length; a++) {
    if (a > 0 && nums[a] == nums[a - 1]) continue; //这次固定的a和上次固定的a如果相等的话就没有必要继续了
    b = a + 1;
    c = nums.length - 1; //每次固定a更新，b和c也必须更新
    while (b < c) {
      sum = nums[a] + nums[b] + nums[c];
      if (target == sum) {
        return target; //优化1：相等直接返回
      }
      updateBest(sum);
      if (sum < target) {
        let b1 = b + 1;
        while (b1 < c && nums[b1] == nums[b]) {
          b1++; //优化2：移动指针时移动到下一个不相等的值
        }
        b = b1;
      } else {
        let c1 = c - 1;
        while (b < c1 && nums[c1] == nums[c]) {
          c1--; //优化2
        }
        c = c1;
      }
    }
  }
  return best;
};
console.log(threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82));
