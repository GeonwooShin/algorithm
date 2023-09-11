function solution(n) {
  let dp = [0, 1, 2];
  if (n >= 3) {
    for (let i = 3; i <= n; i++) {
      dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
    }
  }
  return dp[n] % 1234567;
}

const n = 2000;
console.log(solution(n));

// 1
// 11 2
// 111 12 21
// 1111 112 121 211 22
// 11111 1112 1121 1211 2111 221 212 122
