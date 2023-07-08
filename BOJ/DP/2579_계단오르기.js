const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const stairNum = input.shift();
const dp = Array(stairNum).fill(0);

dp[0] = input[0];
dp[1] = Math.max(input[0], input[0] + input[1]);
dp[2] = Math.max(input[0] + input[2], input[1] + input[2]);

for (let i = 3; i < stairNum; i++) {
  dp[i] = Math.max(dp[i - 3] + input[i] + input[i - 1], dp[i - 2] + input[i]);
}

console.log(dp[stairNum - 1]);
