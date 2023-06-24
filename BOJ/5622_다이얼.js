const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = 0;

const dial = {
  3: "ABC",
  4: "DEF",
  5: "GHI",
  6: "JKL",
  7: "MNO",
  8: "PQRS",
  9: "TUV",
  10: "WXYZ",
};

for (let i = 0; i < input.length; i++) {
  for (let j = 3; j <= 10; j++) {
    if (dial[j].includes(input[i])) answer += j;
    break;
  }
}

console.log(answer);
