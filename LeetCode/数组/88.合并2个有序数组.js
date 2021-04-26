var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    cur,
    tail = m + n - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 < 0) {
      cur = nums2[p2--];
    } else if (p2 < 0) {
      cur = nums1[p1--];
    } else if (nums1[p1] > nums2[p2]) {
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[tail--] = cur;
  }
  return nums1;
};

//平常的做法是开启一个m+n长度的新数组，两个指针分别指着两数组的开始
//那个指针指的小，就把该值放入新数组中，
//如果其中一个指到末尾，就把剩下的数组放到新数组的末尾

//上面的方法会多出一个数组的空间
//如果可以直接在原有的数组上修改，岂不是省下了空间
//所以把指针改到指向最后面，从后往前遍历
