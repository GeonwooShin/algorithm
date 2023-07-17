// const fs = require('fs')
// const [N, ...str] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input =
  "14\npush 1\npush 2\ntop\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\ntop";

const [N, ...str] = input.toString().trim().split("\n");

const arr = [];
const result = [];

function solution(str) {
  if (str.includes("push")) {
    const [_, y] = str.split(" ");
    const num = Number(y);
    arr.push(num);
  }
  switch (str) {
    case "pop":
      result.push(arr.pop() || -1);
      break;
    case "top":
      result.push(arr[arr.length - 1] || -1);
      break;
    case "size":
      result.push(arr.length);
      break;
    case "empty":
      result.push(arr.length === 0 ? 1 : 0);
      break;
  }
}

for (let i = 0; i < N; i++) {
  solution(str[i]);
}

console.log(result.join("\n"));
