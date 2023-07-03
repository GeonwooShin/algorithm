const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const a = input[0].split(" ").map((x) => parseInt(x));
const basketNum = a[0];
const throwNum = a[1];
let answer = Array.from({ length: basketNum }, () => 0);

for (let i = 1; i <= throwNum; i++) {
  const b = input[i].split(" ").map((x) => parseInt(x));
  const lowNumBasket = b[0];
  const highNumBasket = b[1];
  const ballNum = b[2];
  for (let j = lowNumBasket; j <= highNumBasket; j++) {
    answer[j - 1] = ballNum;
  }
}

console.log(answer.join(" "));
