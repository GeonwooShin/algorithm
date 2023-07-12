const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

function solution(n) {
  let answer = 0;
  if (n === 1 || n === 3) return -1;
  while (n > 0) {
    if (n % 2 === 1 || n % 5 === 0) {
      answer++;
      n -= 5;
    } else if (n % 2 === 0) {
      answer++;
      n -= 2;
    }
  }
  return answer;
}

const result = solution(input);
console.log(result);
