// 내풀이

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// let [coinTypeNum, money] = input
//   .shift()
//   .split(" ")
//   .map((x) => parseInt(x));
// const coinType = input.map((x) => parseInt(x)).reverse();
// let count = 0;

// for (let i = 0; i < coinTypeNum; i++) {
//   if (money === 0) break;
//   if (parseInt(money / coinType[i]) === 0) {
//     continue;
//   } else {
//     while (parseInt(money / coinType[i]) !== 0) {
//       money -= coinType[i];
//       count++;
//     }
//   }
// }
// console.log(count);

// 좀더 좋은 풀이

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [coinTypeNum, money] = input
  .shift()
  .split(" ")
  .map((x) => parseInt(x));
const coinType = input.map((x) => parseInt(x)).reverse();
let count = 0;

for (let i = 0; i < coinTypeNum; i++) {
  if (money < coinType[i]) continue;
  else {
    const value = parseInt(money / coinType[i]);
    money -= value * coinType[i];
    count += value;
    if (money === 0) break;
  }
}
console.log(count);
