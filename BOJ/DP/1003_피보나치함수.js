const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input.shift());

const fibonacci = [
  [1, 0],
  [0, 1],
];
for (let i = 0; i < T; i++) {
  const num = Number(input[i]);
  for (let j = 2; j <= num; j++) {
    fibonacci[j] = [
      fibonacci[j - 2][0] + fibonacci[j - 1][0],
      fibonacci[j - 2][1] + fibonacci[j - 1][1],
    ];
  }
  console.log(fibonacci[num].join(" "));
}
