// const fs = require("fs");
// const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

const str = "15";
const N = Number(str.toString().trim());

function solution() {
  let cnt = 0;
  let lt = 1;
  let rt = 1;
  let sum = 1;
  while (rt <= N) {
    if (sum === N) cnt++;
    if (sum <= N) {
      sum += ++rt;
    } else if (sum > N) {
      sum -= lt++;
    }
  }
  return cnt;
}

const answer = solution();
console.log(answer);
