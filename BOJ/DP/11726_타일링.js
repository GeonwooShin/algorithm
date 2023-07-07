const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const dp = [1, 2];
for (let i = 2; i < input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[input - 1]);
