const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const paperNum = parseInt(input.shift());
const paperCrd = [];
for (let i = 0; i < paperNum; i++) {
  paperCrd.push(input[i].split(" ").map((x) => parseInt(x)));
}
const arr = Array.from(Array(100), () => Array(100).fill(0));
let answer = 0;

for (let i = 0; i < paperNum; i++) {
  let x = paperCrd[i][0];
  let y = paperCrd[i][1];
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      if (arr[x + j][y + k] !== 0) {
        continue;
      }
      if (arr[x + j][y + k] === 0) {
        arr[x + j][y + k] = 1;
        answer++;
      }
    }
  }
}
console.log(answer);
