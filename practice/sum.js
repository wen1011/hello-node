console.log("hello world!");
function sum(param) {
  let sum = 0;
  for (i = 1; i <= param; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sum(3)); // 6
console.log(sum(6)); // 21
console.log(sum(10)); // 55
