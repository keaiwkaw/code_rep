/* 
写了也有几道题了，看着题有一点思路，但也不是完全有思路，看着题解还是可以理解
官方解答：
看见有序的数组，自然而然的应该想到二分查找
如果找到一个中间 就要确定左边为有序还是右边有序
根据target的大小更新查找区间

*/

var search = function (nums, target) {
  let l = 0,
    n = nums.length,
    r = n - 1;
  if (n == 1) {
    return nums[0] == target ? 0 : -1;
  }
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[0] < nums[mid]) {
      //左边有序
      if (nums[0] <= target && target < nums[mid]) {
        // 目标值在0-mid之间
        r = mid - 1; //更新区间
      } else {
        l = mid + 1;
      }
    } else {
      // 右边有序
      if (nums[mid] < target && target <= nums[n - 1]) {
        //目标值在mid-n-1之间
        l = mid + 1; ////更新区间
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
