/* 
看到升序 logn 自然而然的想到了二分查找可是我还是不会~
官方题解的意思是：
找开始位置就是找第一个大于等于target的idx
找结束位置就是找第一个不等于target的idx----结束位置就是idx-1
*/
var searchRange = function (nums, target) {
  let res = [-1, -1];
  let leftIdx = binarySearch(nums, target, true);
  let rightIdx = binarySearch(nums, target, false) - 1;
  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    //上面的这个判断是至关重要的！！！
    res = [leftIdx, rightIdx];
  }
  return res;
  function binarySearch(nums, target, lower) {
    let left = 0,
      right = nums.length - 1,
      n = nums.length;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1;
        debugger;
        n = mid;
        //找第一个nums.mid会等于target
      } else {
        left = mid + 1;
      }
    }
    return n;
  }
};

//这道题还是不太懂~
console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 8));
