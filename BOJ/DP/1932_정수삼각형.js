const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const depth = Number(input.shift());
const arr = input.map((v) => v.split(" ").map((x) => Number(x)));

for (let i = 1; i < depth; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) arr[i][j] += arr[i - 1][j];
    else if (j === i) arr[i][j] += arr[i - 1][j - 1];
    else arr[i][j] += Math.max(arr[i - 1][j - 1], arr[i - 1][j]);
  }
}

console.log(Math.max(...arr[depth - 1]));
