// const fs = require('fs')
// const [K, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = "10\n1\n3\n5\n4\n0\n0\n7\n0\n0\n6";
const [K, ...input] = str.toString().trim().split("\n");

const T = Number(K);
const arr = input.map((v) => Number(v));

const result = [];

arr.forEach((v) => {
  if (v === 0) result.pop();
  else result.push(v);
});

console.log(result.reduce((a, c) => a + c, 0));
