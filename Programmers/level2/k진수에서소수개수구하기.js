function isPrime(number) {
  if (number === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let answer = 0;
  const arr = n
    .toString(k)
    .split("0")
    .filter((num) => Number(num) !== 0);
  arr.forEach((num) => {
    if (isPrime(Number(num))) answer++;
  });
  return answer;
}

const n = 437674;
const k = 3;
console.log(solution(n, k));
