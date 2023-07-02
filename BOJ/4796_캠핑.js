const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [L, P, V] = input[i].split(" ").map((x) => parseInt(x));
  let fullWeek = parseInt(V / P) * L;
  let rest = V % P > L ? L : V % P;
  console.log(`Case ${i + 1}: ${fullWeek + rest}`);
}
