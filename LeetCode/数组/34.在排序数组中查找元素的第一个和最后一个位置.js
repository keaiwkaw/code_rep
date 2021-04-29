/* 
看到升序 logn 自然而然的想到了二分查找可是我还是不会~
*/
var searchRange = function (nums, target) {
  let l = 0,
    n = nums.length;
  r = n - 1;
  let res = [];
  while (l <= r) {
    let mid = Math.round((l + r) / 2);
    debugger;
    if (nums[mid] == target) {
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 8));
