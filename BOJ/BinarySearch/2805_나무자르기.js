const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [treeNum, haveToGetTotal] = input[0].split(" ").map((v) => Number(v));
const treeHeightArr = input[1]
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);
const answer = [];
function solution() {
  let start = 0;
  let end = treeHeightArr[treeHeightArr.length - 1];
  while (start <= end) {
    let total = 0;
    let mid = Math.floor((start + end) / 2);
    treeHeightArr.forEach((v) => {
      if (v > mid) total += v - mid;
    });
    if (total < haveToGetTotal) {
      end = mid - 1;
    } else {
      answer.push(mid);
      start = mid + 1;
    }
  }
}
solution();
console.log(Math.max(...answer));
