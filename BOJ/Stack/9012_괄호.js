const fs = require("fs");
const [N, ...strArr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(N);

function solution(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0 && str[i] === ")") return "NO";
    if (str[i] === "(") stack.push(str[i]);
    else if (str[i] === ")") stack.pop();
  }
  return stack.length === 0 ? "YES" : "NO";
}

for (let i = 0; i < T; i++) {
  console.log(solution(strArr[i]));
}
