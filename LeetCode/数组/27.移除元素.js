//利用现成的API
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
//双指针法
/* 
重复的值是没有用的，所以就将后面没重复的值赋值到前面来

自己写的报错emmm

*/
var removeElement = function (nums, val) {
  let p = 0,
    cur = 0,
    len = nums.length;
  // p待处理位置  cur 当前位置
  while (p < len) {
    if (nums[p] !== val) {
      nums[cur] = nums[p];
      cur++;
    }
    p++;
  }
  return cur + 1;
};
//官方答案
var removeElement = function (nums, val) {
  const n = nums.length;
  let left = 0;
  for (let right = 0; right < n; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};
//优化 如果要删除的元素在第一位就要把元素逐个前移
//所以这里把双指针改为一前一后

var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
};
//前面相等，把后面的值搬到前面去，等于从后往前检测
