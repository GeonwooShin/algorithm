const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [K, N] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));
const lengthArr = input.map((v) => Number(v));
const answer = [];

function solution() {
  let start = 0;
  let end = Math.max(...lengthArr);
  while (start <= end) {
    let total = 0;
    let mid = Math.floor((start + end) / 2);
    lengthArr.forEach((item) => {
      total += Math.floor(item / mid);
    });
    if (total >= N) answer.push(mid);
    if (total < N) end = mid - 1;
    else start = mid + 1;
  }
}

solution();
console.log(Math.max(...answer));
