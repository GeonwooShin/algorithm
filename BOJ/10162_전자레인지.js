const fs = require("fs");
const cookTime = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

function solution(T) {
  let answer = "";

  answer += `${parseInt(T / 300)} `;
  T %= 300;
  answer += `${parseInt(T / 60)} `;
  T %= 60;
  answer += `${parseInt(T / 10)}`;
  T %= 10;
  if (T % 10 !== 0) answer = -1;
  return answer;
}

console.log(solution(cookTime));
