function solution(num, pickNum) {
  let answer = [];
  let tmp = Array.from({ length: pickNum }, () => 0);
  console.log(tmp);
  function DFS(L) {
    if (L === pickNum) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= num; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

const num = 3;
const pickNum = 2;
console.log(solution(num, pickNum));
