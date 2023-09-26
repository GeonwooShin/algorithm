function solution(n, t, m, p) {
  let result = "";
  let answer = "";
  let count = 0;
  while (t * m > answer.length) {
    answer += count.toString(n);
    count++;
  }
  answer = answer.slice(0, t * m);
  for (let i = 0; i < answer.length; i++) {
    if ((i - p + 1) % m === 0) result += answer[i];
  }
  return result.toUpperCase();
}

const n = 16;
const t = 16;
const m = 2;
const p = 2;
console.log(solution(n, t, m, p));
