function solution(numbers, m) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < numbers.length; rt++) {
    sum += numbers[rt];
    while (sum > m) {
      sum -= numbers[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

const numbers = [1, 3, 1, 2, 3];
console.log(solution(numbers, 5));
