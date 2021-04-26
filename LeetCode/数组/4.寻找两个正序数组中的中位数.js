var findMedianSortedArrays = function (nums1, nums2) {
  let p1 = nums1.length - 1,
    p2 = nums2.length - 1,
    cur,
    tail = nums1.length + nums2.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 == -1) {
      cur = nums2[p2--];
    } else if (p2 == -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
  let mid = nums1.length / 2;
  return mid % 1 > 0
    ? nums1[Math.floor(mid)]
    : (nums1[mid] + nums1[mid - 1]) / 2;
};
console.log(findMedianSortedArrays([1, 3], [2]));

//先合并数组，接着找出中位数

//二分查找  我学不会，哭哭
