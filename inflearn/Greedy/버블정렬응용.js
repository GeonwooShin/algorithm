function solution(num) {
  let answer = num;
  for (let i = 0; i < num.length - 1; i++) {
    for (let j = 0; j < num.length - i - 1; j++) {
      if (num[j] > 0 && num[j + 1] < 0)
        [num[j], num[j + 1]] = [num[j + 1], num[j]];
    }
  }
  return answer;
}

const num = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(num));
