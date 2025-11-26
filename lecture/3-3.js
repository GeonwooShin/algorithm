// 정렬
// 삽입정렬 => 왼쪽부터 하나씩 차례대로 보면서, 지금 원소가 들어가야 할 위치(왼쪽 정렬된 부분)를 찾아서 ‘삽입’하는 정렬
const arr = [4, 6, 2, 9, 1];

function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      let temp;
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else break;
    }
  }
  return arr;
}

const answer = solution(arr);
console.log(answer);
