// function solution(numbers, target) {
//   let answer = 0;
//   function DFS(count, sum) {
//     if (count === numbers.length) {
//       if (sum === target) answer++;
//       return;
//     }
//     DFS(count + 1, sum + numbers[count]);
//     DFS(count + 1, sum - numbers[count]);
//   }
//   DFS(0, 0);
//   return answer;
// }

function solution(numbers, target) {
  if (numbers.length === 1) {
    const [n] = numbers;
    if (n === target) return 1;
    if (-n === target) return 1;
    return 0;
  }

  // 숫자 [4, 1, 2, 1]을 각각 더하거나 빼거나해서 4을 만들수 있는 경우의 수 = solution([4, 1, 2, 1], 4)
  return (
    // = [1,2,1]을 각각 더하거나 빼거나해서 0=(4-4)을 만들수 있는 경우의 수
    solution(numbers.slice(1), target - numbers[0]) +
    // + [1,2,1]을 각각 더하거나 빼거나해서 8(=4+4)을 만들수 있는 경우의 수
    solution(numbers.slice(1), target + numbers[0])
  );
}
const numbers = [4, 1, 2, 1];
const target = 4;

console.log(solution(numbers, target));
