function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let rows = 0;
  let cols = 0;
  let dgn1 = 0;
  let dgn2 = 0;
  for (let i = 0; i < arr.length; i++) {
    rows = 0;
    cols = 0;
    for (let j = 0; j < arr.length; j++) {
      rows += arr[i][j];
      cols += arr[j][i];
      if (i === j) {
        dgn1 += arr[i][i];
      }
      if (j === arr[i].length - i - 1) {
        dgn2 += arr[i][j];
      }
    }
    answer = Math.max(answer, rows, cols, dgn1, dgn2);
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
