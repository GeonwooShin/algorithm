const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().spilt("\n");

const [basketNum, tryNum] = input[0].split(" ").map((x) => parseInt(x));
let basket = Array(basketNum)
  .fill(1)
  .map((a, b) => a + b);

for (let i = 1; i <= tryNum; i++) {
  const [num1, num2] = input[i].split(" ").map((x) => parseInt(x));
  let arr = [];
  for (let j = num1 - 1; j < num2; j++) {
    arr.push(basket[j]);
  }
  arr.reverse();
  basket.splice(num1 - 1, num2 - num1 + 1, ...arr);
}

console.log(basket.join(" "));
