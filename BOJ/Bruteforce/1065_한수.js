const fs = require("fs");
const number = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let answer = 0;

function hansu(n) {
  if (n === 1000) return;
  else {
    let a = parseInt(n / 100);
    n %= 100;
    let b = parseInt(n / 10);
    n %= 10;
    let c = n;
    if (b - a === c - b) {
      answer++;
    }
  }
}

for (let i = 1; i <= number; i++) {
  if (i < 100) {
    answer++;
  } else {
    hansu(i);
  }
}
console.log(answer);
