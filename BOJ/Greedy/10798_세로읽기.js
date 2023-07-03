const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let maxWordLength = Math.max(...input.map((x) => x.length));
let answer = "";
for (let i = 0; i < maxWordLength; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i]) {
      answer += input[j][i];
    }
  }
}
console.log(answer);
