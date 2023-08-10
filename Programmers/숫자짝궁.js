function solution(X, Y) {
  let answer = "";
  const hashX = new Map();
  const hashY = new Map();
  for (let i of X) {
    hashX.set(i, (hashX.get(i) || 0) + 1);
  }
  for (let i of Y) {
    hashY.set(i, (hashY.get(i) || 0) + 1);
  }
  for (let i = 9; i >= 0; i--) {
    const str = String(i);
    const cnt = Math.min(hashX.get(str), hashY.get(str));
    answer += str.repeat(cnt);
  }
  return answer ? (Number(answer) ? answer : "0") : "-1";
}

const X = "100";
const Y = "2345";
console.log(solution(X, Y));
