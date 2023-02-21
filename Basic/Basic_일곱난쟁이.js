function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        // 배열의 인덱스가 섞이지 않도록 뒤의 인덱스를 먼저 제거한다.
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let heightArr = [7, 23, 19, 15, 8, 13, 20, 10, 25];
console.log(solution(heightArr));
