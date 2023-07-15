const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const arr = input[2]
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);

function solution() {
  let cnt = 0;
  let lt = 0;
  let rt = N - 1;
  let sum = arr[lt] + arr[rt];
  while (lt < rt) {
    if (sum === M) cnt++;
    if (sum <= M) {
      sum = arr[++lt] + arr[rt];
    } else {
      sum = arr[lt] + arr[--rt];
    }
  }
  return cnt;
}

const answer = solution();
console.log(answer);
