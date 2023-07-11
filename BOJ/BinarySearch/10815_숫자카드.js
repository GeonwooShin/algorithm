const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const NArr = input[1].split(" ").map((v) => Number(v));
const M = Number(input[2]);
const MArr = input[3].split(" ").map((v) => Number(v));

const mapArr = new Map();
const answer = [];

NArr.forEach((v) => {
  if (mapArr.has(v)) mapArr.set(v, mapArr.get(v) + 1);
  else mapArr.set(v, 1);
});

MArr.forEach((v) => {
  if (mapArr.has(v)) answer.push(mapArr.get(v));
  else answer.push(0);
});

console.log(answer.join(" "));
