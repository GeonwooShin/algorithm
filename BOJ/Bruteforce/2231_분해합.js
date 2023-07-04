const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let arr = [];

function func(n) {
  let sum = n;
  let str = n + "";
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
}

for (let i = 1; i <= input; i++) {
  if (func(i) === input) arr.push(i);
}

console.log(arr.length ? Math.min(...arr) : 0);
