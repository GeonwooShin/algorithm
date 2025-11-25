// 정렬
// 선택정렬 => 선택해서 비교 후 앞자리에 위치 시킴 => 앞자리 제외 다시 동작

// 0 1 2 3 4

const arr = [5, 2, 7, 1, 9];

function solution(arr) {
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[i + j] < result[i]) {
        const temp = result[i + j];
        result[i + j] = result[i];
        result[i] = temp;
      }
    }
  }
  return result;
}

const answer = solution(arr);
console.log(answer);
