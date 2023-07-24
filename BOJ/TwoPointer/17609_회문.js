// const fs = require("fs");
// const [N, ...str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const fs = "7\nabba\nsummuus\nxabba\nxabbay\ncomcom\ncomwwmoc\ncomwwtmoc";
const [N, ...str] = fs.toString().trim().split("\n");

const T = Number(N);

const result = [];

function checkWord(str, lt, rt) {
  while (lt < rt) {
    if (str[lt] === str[rt]) {
      lt++;
      rt--;
    } else return false;
  }
  return true;
}

function solution(str) {
  let lt = 0;
  let rt = str.length - 1;
  while (lt < rt) {
    if (str[lt] === str[rt]) {
      lt++;
      rt--;
    } else {
      if (checkWord(str, lt, rt - 1) || checkWord(str, lt + 1, rt)) return 1;
      else return 2;
    }
  }
  return 0;
}

for (let s of str) {
  result.push(solution(s));
}
console.log(result.join("\n"));
