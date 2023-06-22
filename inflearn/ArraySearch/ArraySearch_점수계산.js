function solution(score) {
  let answer = 0,
    cnt = 0;
  score.forEach((i) => {
    if (i === 0) {
      cnt = 0;
      answer += cnt;
    } else {
      cnt += 1;
      answer += cnt;
    }
  });
  return answer;
}

function solution2(score) {
  let answer = 0;
  score.reduce((acc, cur) => {
    if (cur === 1) {
      acc += cur;
      answer += acc;
    } else {
      acc = 0;
    }
    return acc;
  }, 0);
  return answer;
}

let score = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(score));
console.log(solution2(score));
