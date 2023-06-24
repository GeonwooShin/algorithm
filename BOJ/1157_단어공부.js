const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const str = input.toUpperCase();
const obj = {};
let answer = "";
let count = 0;
for (let i = 0; i < str.length; i++) {
  const num = obj[str[i]];
  if (!num) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]] = num + 1;
  }
}

for (let x in obj) {
  if (obj[x] > count) {
    count = obj[x];
    answer = x;
  } else if (obj[x] === count) {
    answer = "?";
  }
}

console.log(answer);
