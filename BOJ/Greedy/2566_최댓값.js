const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = [];
let max = 0;
let column = "";
let row = "";

for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(" ").map((x) => parseInt(x)));
}
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[i][j] > max) {
      max = arr[i][j];
      column = i;
      row = j;
    }
  }
}
console.log(`${max}\n${column + 1} ${row + 1}`);
