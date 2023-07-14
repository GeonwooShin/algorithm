// const fs = require('fs')
// const input = Number(fs.readFileSync('/dev/stdin').toString().trim())

const str = "53";
const input = Number(str.toString().trim());

function prime(num) {
  if (num === 1) return false;
  if (num === 2) return 2;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return num;
}

function solution(num) {
  let cnt = 0;
  let lt = 0;
  let rt = 0;
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (prime(i)) arr.push(i);
  }
  let sum = arr[0];
  while (rt < arr.length) {
    if (sum === num) cnt++;
    if (sum <= num) {
      rt += 1;
      if (rt > arr.length) break;
      sum += arr[rt];
    } else if (sum > num) {
      sum -= arr[lt++];
    }
  }
  return cnt;
}

const answer = solution(input);
console.log(answer);
