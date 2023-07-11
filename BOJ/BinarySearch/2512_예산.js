const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cityNum = Number(input[0]);
const budgetArr = input[1].split(" ").map((v) => Number(v));
const totalBudget = Number(input[2]);
const answer = [];

function solution() {
  let start = 0;
  let end = Math.max(...budgetArr);
  while (start <= end) {
    let total = 0;
    let mid = Math.floor((start + end) / 2);
    budgetArr.forEach((city) => {
      if (mid > city) total += city;
      else total += mid;
    });
    if (total <= totalBudget) answer.push(mid);
    if (total > totalBudget) end = mid - 1;
    else start = mid + 1;
  }
}

solution();

console.log(Math.max(...answer));
