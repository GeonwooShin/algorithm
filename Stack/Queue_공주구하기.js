function solution(priceNum, num) {
  let answer;
  let queue = Array.from({ length: priceNum }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < num; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

const priceNum = 8;
const num = 3;
console.log(solution(priceNum, num));

// Array.from으로 연속된 숫자 배열 만들기
// Array.from({length: 5}, (v, i) => i) => [0, 1, 2, 3, 4]
