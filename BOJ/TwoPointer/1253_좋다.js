const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);
let answer = 0;

function solution(arr, num) {
  let lt = 0;
  let rt = arr.length - 1;
  let sum = arr[lt] + arr[rt];
  while (lt < rt) {
    if (sum === num) return 1;
    if (sum <= num) {
      lt++;
      sum = arr[lt] + arr[rt];
    } else if (sum > num) {
      rt--;
      sum = arr[lt] + arr[rt];
    }
  }
  return 0;
}

for (let i = 0; i < N; i++) {
  answer += solution(arr.slice(0, i).concat(arr.slice(i + 1)), arr[i]);
}
console.log(answer);
