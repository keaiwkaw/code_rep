function c() {
  a = 1;
  function abc() {
    console.log(a);
    a = 2;
  }
  console.log(a);
  abc();
}
// c();
var judgeSquareSum = function(c) {
  let maxnum = Math.round(Math.sqrt(c))
  let a = 0,b = maxnum;
  while (a <= b) {
    let res = a ** 2 + b ** 2
    if (res === c) {
      return true
    } else if(res<c) {
      a++
    } else {
      b--
    }
  }
  return false
};
console.log(judgeSquareSum(2));