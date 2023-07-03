// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((x) => parseInt(x))

const str = "3\n124\n25\n194";
const input = str
  .toString()
  .trim()
  .split("\n")
  .map((x) => parseInt(x));

const testCaseNum = input.shift();
const Quarter = 25;
const Dime = 10;
const Nickel = 5;
const Penny = 1;

function solution(num) {
  let arr = [];
  let money = num;
  arr.push(parseInt(money / Quarter));
  money %= Quarter;
  arr.push(parseInt(money / Dime));
  money %= Dime;
  arr.push(parseInt(money / Nickel));
  money %= Nickel;
  arr.push(parseInt(money / Penny));
  money %= Penny;
  console.log(arr.map((x) => String(x)).join(" "));
}
for (let i = 0; i < testCaseNum; i++) {
  solution(input[i]);
}
