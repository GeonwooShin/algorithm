const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const haveCardArr = input[1].split(" ").map((v) => Number(v));
const M = Number(input[2]);
const isHaveArr = input[3].split(" ").map((v) => Number(v));
const answer = new Map();
const result = [];

for (let i = 0; i < N; i++) {
  if (answer.has(haveCardArr[i])) {
    answer.set(haveCardArr[i], answer.get(haveCardArr[i]) + 1);
  } else {
    answer.set(haveCardArr[i], 1);
  }
}

for (let i = 0; i < M; i++) {
  if (answer.has(isHaveArr[i])) result.push(answer.get(isHaveArr[i]));
  else result.push(0);
}

console.log(result.join(" "));
