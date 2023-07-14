const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map((v) => Number(v));
const arr = input[1].split(" ").map((v) => Number(v));

function solution(N, K) {
  const tempArr = [];
  let lt = 0;
  let rt = 0;
  let sum = arr[0];
  while (rt < N) {
    if (rt - lt + 1 === K) {
      tempArr.push(sum);
      sum -= arr[lt++];
      sum += arr[++rt];
    }
    if (rt - lt + 1 < K) {
      rt += 1;
      sum += arr[rt];
    }
  }
  return Math.max(...tempArr);
}

const answer = solution(N, K);
console.log(answer);
