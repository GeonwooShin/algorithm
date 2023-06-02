function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((a, c) => a + c, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

const arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
