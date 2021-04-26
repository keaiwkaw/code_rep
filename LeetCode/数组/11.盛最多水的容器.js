var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let s = 0;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    s = Math.max(area, s);
    if (height[left] <= height) {
      left++;
    } else {
      right--;
    }
  }
  return s;
};
//双指针法，左右指针
//每次就移动最弱的那个指针说不定还能找到大的，如果移动强的指针那么下次的结果就比这次的结果小了
//计算面积后，把最大的保存起来
