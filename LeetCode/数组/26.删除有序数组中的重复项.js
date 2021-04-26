let arr = [1, 1, 1, 2];
var removeDuplicates = function (nums) {
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == cur) {
      nums.splice(i, 1);
      i--;
    } else {
      cur = nums[i];
    }
  }
  return nums.length;
};
//笨办法，逐个往过检测，遇到相等的（后一个等于前一个）就删除

//改进思路，由于是有序的，相等的先不删除，一直往后检测直到出现不相等的，将那个不相等的搬到慢指针的后面
var removeDuplicates = function (nums) {
  let len = nums.length,
    p = 0,
    q = 1;
  while (q < len) {
    if (nums[p] == nums[q]) {
      q++;
    } else {
      nums[p++] = nums[q];
    }
  }
  return p + 1;
};
//官方题解
var removeDuplicates = function (nums) {
  let len = nums.length;
  if (len == 0) {
    return 0;
  }
  let fast = (slow = 1);
  for (; fast < len; fast++) {
    if (nums[fast] != nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
};
/* 双指针： 官方题解，
快指针从1到n - 1, 如果不nums[fast] != nums[fast - 1]说明已经跳过了相等的项了，这时候把后面的搬到slow对应的位置 
slow++；
最后slow就是数组的长度。
*/
