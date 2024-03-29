// 그리디 알고리즘 기본 문제

function solution(arr) {
  let answer = 0;
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let endTime = 0;
  for (let x of arr) {
    if (x[0] >= endTime) {
      answer++;
      endTime = x[1];
    }
  }
  return answer;
}

const arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
