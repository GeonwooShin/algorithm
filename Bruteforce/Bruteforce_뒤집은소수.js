function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(numArr) {
  let answer = [];
  for (let num of numArr) {
    let reverse = Number(num.toString().split("").reverse().join(""));
    if (isPrime(reverse)) {
      answer.push(reverse);
    }
  }
  return answer;
}

function solution2(numArr) {
  let answer = [];
  for (let num of numArr) {
    let res = 0;
    while (num) {
      let t = num % 10;
      res = res * 10 + t;
      num = parseInt(num / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

const numArr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(numArr));
console.log(solution2(numArr));
