// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = "5\n3 1 4 3 2";
const input = str.toString().trim().split("\n");

let answer = 0;
let answerArr = [];
const N = parseInt(input.shift());
const timeArr = input[0].split(" ").map((time) => parseInt(time));
const sortArr = timeArr.sort((a, b) => a - b); // [1, 2, 3, 3, 4]
// 1+ 1+2+ 1+2+3+ 1+2+3+3+ 1+2+3+3+4
for (let x of sortArr) {
  answer += x;
  answerArr.push(answer);
}
console.log(answerArr.reduce((a, c) => a + c, 0));
