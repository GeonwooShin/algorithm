const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input
  .shift()
  .split(" ")
  .map((x) => Number(x));

const goodEx1 = [];
const goodEx2 = [];
for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) goodEx1.push("WBWBWBWB");
  else goodEx1.push("BWBWBWBW");
}
for (let i = 0; i < 8; i++) {
  if (i % 2 === 1) goodEx2.push("WBWBWBWB");
  else goodEx2.push("BWBWBWBW");
}
let repaintEx1Arr = [];
let repaintEx2Arr = [];

for (let k = 0; k < M - 7; k++) {
  for (let t = 0; t < N - 7; t++) {
    let repaintEx1 = 0;
    let repaintEx2 = 0;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (input[i + k][j + t] !== goodEx1[i][j]) repaintEx1++;
        if (input[i + k][j + t] !== goodEx2[i][j]) repaintEx2++;
      }
    }
    repaintEx1Arr.push(repaintEx1);
    repaintEx2Arr.push(repaintEx2);
  }
}

console.log(Math.min(...repaintEx1Arr, ...repaintEx2Arr));
