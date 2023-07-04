const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((x) => Number(x));
const cards = input[0].split(" ").map((x) => Number(x));

let answer = [];

for (let i = 0; i < cards.length - 2; i++) {
  for (let j = i + 1; j < cards.length - 1; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum <= M) answer.push(sum);
    }
  }
}

console.log(Math.max(...answer));
