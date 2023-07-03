const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = [];
const [basketCount, num] = input[0].split(" ").map((x) => parseInt(x));
for (let i = 1; i <= basketCount; i++) {
  answer.push(i);
}

for (let k = 1; k <= num; k++) {
  const [i, j] = input[k].split(" ").map((x) => parseInt(x));
  const basket1 = answer[i - 1];
  const basket2 = answer[j - 1];
  answer[i - 1] = basket2;
  answer[j - 1] = basket1;
}

console.log(answer.join(" "));
