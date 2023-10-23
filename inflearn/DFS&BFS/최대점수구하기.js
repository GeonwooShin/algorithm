function solution(m, pv, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = pv.length;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + pv[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let limitTime = 20;
let pv = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(limitTime, pv, pt));
