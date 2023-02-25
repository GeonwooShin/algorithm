function solution(score) {
  let answer = new Array(5).fill(1);
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score.length; j++) {
      if (score[i] < score[j]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

let score = [87, 87, 92, 100, 76];
console.log(solution(score));
