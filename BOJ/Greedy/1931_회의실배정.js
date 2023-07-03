const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input.shift());
const arr = [];
let endHour = 0;
let answer = 0;
for (let i = 0; i < N; i++) {
  arr.push(input[i].split(" ").map((x) => parseInt(x)));
}
arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});
for (let i = 0; i < N; i++) {
  if (endHour <= arr[i][0]) {
    endHour = arr[i][1];
    answer++;
  }
}
console.log(answer);
