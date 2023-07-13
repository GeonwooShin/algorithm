const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((v) => Number(v));
const arr = input[1].split(" ").map((v) => Number(v));

function solution(N, M, arr) {
  let lt = 0;
  let rt = 0;
  let cnt = 0;
  while (rt < N && lt < N) {
    let total = 0;
    for (let i = lt; i <= rt; i++) {
      total += arr[i];
    }
    if (total === M) cnt++;
    if (total <= M) rt += 1;
    else lt += 1;
  }
  return cnt;
}

const answer = solution(N, M, arr);
console.log(answer);
