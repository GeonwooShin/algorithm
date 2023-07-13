const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map((v) => Number(v));
const arr = input[1].split(" ").map((v) => Number(v));

function solution(N, S, arr) {
  let lt = 0;
  let rt = 0;
  let len = Number.MAX_SAFE_INTEGER;
  let sum = arr[lt];
  while (lt < N) {
    if (sum >= S) {
      len = Math.min(len, rt - lt + 1);
      sum -= arr[lt];
      lt += 1;
    } else if (sum < S) {
      rt += 1;
      if (rt === N) break;
      sum += arr[rt];
    }
  }
  return len;
}

const answer = solution(N, S, arr);
console.log(answer === Number.MAX_SAFE_INTEGER ? 0 : answer);
