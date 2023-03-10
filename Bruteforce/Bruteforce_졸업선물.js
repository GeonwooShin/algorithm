function solution(money, arr) {
  let answer = 0;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < arr.length; i++) {
    let sum = money - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[j][0] + arr[j][1] <= sum) {
        sum -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
const money = 28;
console.log(solution(money, arr));
