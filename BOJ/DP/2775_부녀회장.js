const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCaseNum = Number(input.shift());
for (let i = 0; i < testCaseNum; i++) {
  let stair = Number(input.shift());
  let homeNum = Number(input.shift());
  const dp = Array.from(Array(stair + 1), () => Array(homeNum + 1).fill(0));
  dp[0].forEach((_, idx) => {
    dp[0][idx] = idx;
  });
  for (let j = 1; j <= stair; j++) {
    for (let k = 1; k <= homeNum; k++) {
      dp[j][k] = dp[j - 1][k] + dp[j][k - 1];
    }
  }
  console.log(dp[stair][homeNum]);
}
