// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = "((().\n.";
const input = str.toString().trim().split("\n");

const result = [];

function solution(str) {
  const stack = ["(", "("];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[") stack.push(str[i]);
    else if (str[i] === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else {
        result.push("no");
        return;
      }
    } else if (str[i] === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
      else {
        result.push("no");
        return;
      }
    }
  }
  if (stack.length === 0) result.push("yes");
  else result.push("no");
}

for (let i = 0; i < input.length - 1; i++) {
  solution(input[i]);
}

console.log(result.join("\n"));
