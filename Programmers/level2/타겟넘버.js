function solution(numbers, target) {
  let answer = 0;
  function DFS(count, sum) {
    if (count === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    DFS(count + 1, sum + numbers[count]);
    DFS(count + 1, sum - numbers[count]);
  }
  DFS(0, 0);
  return answer;
}

const numbers = [4, 1, 2, 1];
const target = 4;
console.log(solution(numbers, target));
