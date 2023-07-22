const fs = require("fs");
const [N, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCaseNum = Number(N);
const result = [];
function solution(str) {
  let Lstack = [];
  let Rstack = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "<":
        if (Lstack.length > 0) Rstack.push(Lstack.pop());
        break;
      case ">":
        if (Rstack.length > 0) Lstack.push(Rstack.pop());
        break;
      case "-":
        if (Lstack.length > 0) Lstack.pop();
        break;
      default:
        Lstack.push(str[i]);
    }
  }
  return Lstack.join("") + Rstack.reverse().join("");
}

for (let i = 0; i < testCaseNum; i++) {
  result.push(solution(input[i]));
}
console.log(result.join("\n"));
