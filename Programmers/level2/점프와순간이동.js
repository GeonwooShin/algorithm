function solution(n) {
  let answer = 0;
  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      answer++;
      n /= 2;
    }
  }
  return answer;
}

const n = 5000;
console.log(solution(n));
