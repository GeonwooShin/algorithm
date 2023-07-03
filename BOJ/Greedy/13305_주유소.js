const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = 0n;
const cityNum = parseInt(input.shift());
const distanceArr = input[0].split(" ").map((x) => BigInt(x));
const costPerLiterArr = input[1].split(" ").map((x) => BigInt(x));
let currentCityCost = costPerLiterArr[0];

for (let i = 0; i < distanceArr.length; i++) {
  answer += currentCityCost * distanceArr[i];
  if (currentCityCost > costPerLiterArr[i + 1])
    currentCityCost = costPerLiterArr[i + 1];
}
console.log(String(answer));
