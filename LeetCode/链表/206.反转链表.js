/* 
双指针
后一个指向前一个
*/

var reverseList = function (head) {
  let low = null;
  let cur = head;
  while (cur) {
    let temp = cur;
    cur = cur.next; //这句如果写在下面两句的后面就会出错，链表为应用类型，temp和cur指的是同一地址，所以执行第三句就相当于把cur.next改变，所以应提前更新cur
    temp.next = low;
    low = temp;
  }
  return low;
};
