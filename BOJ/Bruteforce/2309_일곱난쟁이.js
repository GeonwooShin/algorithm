const fs = require("fs");
const heightArr = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));

const heightSum = heightArr.reduce((a, b) => a + b, 0);

for (let i = 0; i < heightArr.length - 1; i++) {
  for (let j = i + 1; j < heightArr.length; j++) {
    if (heightArr.length === 7) break;
    if (heightSum - (heightArr[i] + heightArr[j]) === 100) {
      heightArr.splice(j, 1);
      heightArr.splice(i, 1);
    }
  }
}
console.log(heightArr.sort((a, b) => a - b, 0).join("\n"));
