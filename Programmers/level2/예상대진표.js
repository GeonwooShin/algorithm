function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    b = Math.ceil(b / 2);
    a = Math.ceil(a / 2);
    answer++;
  }
  return answer;
}

const n = 8;
const a = 4;
const b = 7;
console.log(solution(n, a, b));
