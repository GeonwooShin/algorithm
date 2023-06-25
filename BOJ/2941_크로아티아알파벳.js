const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = input;
const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
for (let x of arr) {
  answer = answer.split(x).join("1");
}
console.log(input.length);
