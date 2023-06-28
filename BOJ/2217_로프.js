const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const ropeNum = parseInt(input.shift());
const ropeTypeArr = input.map((x) => parseInt(x)).sort((a, b) => b - a);

let maxWeight = 0;

for (let i = 0; i < ropeNum; i++) {
  let max = ropeTypeArr[i] * (i + 1);
  if (maxWeight < max) {
    maxWeight = max;
  }
}
console.log(maxWeight);
