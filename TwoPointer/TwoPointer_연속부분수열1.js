function solution(numbers, m) {
  let answer = 0;
  let lt = (sum = 0);
  for (let rt = 0; rt < numbers.length; rt++) {
    sum += numbers[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= numbers[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

const numbers = [1, 2, 1, 3, 1, 1, 1, 2];
const m = 6;
console.log(solution(numbers, m));
