const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);

function solution(N, arr) {
  let lt = 0;
  let rt = N - 1;
  let sum = Number.MAX_SAFE_INTEGER;
  let answer = [0, 0];
  while (lt < rt) {
    if (Math.abs(arr[lt] + arr[rt]) < sum) {
      sum = Math.abs(arr[lt] + arr[rt]);
      answer = [arr[lt], arr[rt]];
    }
    if (arr[lt] + arr[rt] <= 0) lt++;
    else if (arr[lt] + arr[rt] > 0) rt--;
  }
  return answer;
}

const answer = solution(N, arr);
console.log(answer.join(" "));
