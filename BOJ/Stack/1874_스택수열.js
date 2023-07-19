const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = Number(n);
const arr = input.map((v) => Number(v));

function solution(num, arr) {
  const stack = [];
  let answer = "";
  let cnt = 1;
  for (let i = 0; i < num; i++) {
    const number = arr.shift();
    while (cnt <= number) {
      stack.push(cnt++);
      answer += "+ ";
    }
    if (stack.pop() !== number) {
      return "NO";
    }
    answer += "- ";
  }
  return answer.trim().split(" ").join("\n");
}

const result = solution(num, arr);
console.log(result);
