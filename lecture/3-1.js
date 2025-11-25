// 정렬
// 버블정렬 => 교환하면서 자료를 정렬하는 방식, 큰수를 맨뒤로 정렬

// 4, 3, 2, 1
// 3, 2, 1
// 2, 1
// 1

const arr = [4, 6, 1, 3, 9];

function solution(arr) {
  const result = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let temp;
      if (result[j] > result[j + 1]) {
        temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const answer = solution(arr);
console.log(answer);
