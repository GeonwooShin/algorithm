const fs = require("fs");
const str = fs.readFileSync("/dev/stdin").toString().trim();

function solution(str) {
  let stack = [];
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" && str[i + 1] === ")") {
      cnt += stack.length;
      i++;
    } else if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")") {
      cnt += 1;
      stack.pop();
    }
  }
  return cnt;
}

const result = solution(str);
console.log(result);
