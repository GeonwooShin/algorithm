const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testNum = parseInt(a);
const curScore = b.split(" ").map((x) => parseInt(x));

const maxScore = Math.max(...curScore);
const fixedScore = curScore.map((score) => (score / maxScore) * 100);

console.log(fixedScore.reduce((a, c) => a + c, 0) / testNum);
