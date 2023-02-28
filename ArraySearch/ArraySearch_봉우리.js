function solution(arr) {
  let answer = 0;
  arr.unshift(Array(5).fill(0));
  arr.push(Array(5).fill(0));
  for (let k = 0; k < arr.length; k++) {
    arr[k].push(0);
    arr[k].unshift(0);
  }
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      arr[i][j] >
        Math.max(arr[i - 1][j], arr[i][j - 1], arr[i + 1][j], arr[i][j + 1]) &&
        answer++;
    }
  }
  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
