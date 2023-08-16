const fs = require("fs");
const [num, ...A] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = num.split(" ").map((v) => Number(v));
const numbers = A.map((v) => Number(v)).sort((a, b) => a - b);

function solution(N, M, numbers) {
  let answer = Number.MAX_SAFE_INTEGER;
  let lt = 0;
  let rt = 1;
  while (rt < N) {
    const diff = Math.abs(numbers[lt] - numbers[rt]);
    if (diff >= M && diff < answer) answer = diff;
    if (diff <= M) rt++;
    else if (diff > M) lt++;
  }
  return answer;
}

console.log(solution(N, M, numbers));
