function solution(num) {
  let answer;
  function DFS(num) {
    if (num === 1) return 1;
    else return num * DFS(num - 1);
  }
  answer = DFS(num);
  return answer;
}

const num = 4;
console.log(solution(num));
