const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0;
const [leakedPlaceNum, tapeLength] = input
  .shift()
  .split(" ")
  .map((x) => Number(x));
const leakedPlace = input[0]
  .split(" ")
  .map((x) => Number(x))
  .sort((a, b) => a - b);
const arr = Array.from({ length: leakedPlace[leakedPlaceNum - 1] }, () => 0);
leakedPlace.forEach((v) => {
  arr[v] = 1;
});
for (let i = 0; i < leakedPlaceNum; i++) {
  if (arr[leakedPlace[i]] === 1) {
    for (let j = 0; j < tapeLength; j++) {
      arr[leakedPlace[i] + j] = 0;
    }
    answer++;
  }
}
console.log(answer);
