// 정렬
// 병합정렬 => 배열의 앞부분, 뒷부분으로 나눠서 각각 정렬한 후에 병합을 진행하는 정렬 방법
// 병합 정렬의 핵심 조건: 병합하고자 하는 배열이 미리 정렬이 되어있어야함

const arr1 = [2, 5, 6, 7];
const arr2 = [3, 4, 8, 9];

function solution(arr1, arr2) {
  const result = [];
  let arridx1 = 0;
  let arridx2 = 0;
  while (arridx1 < arr1.length && arridx2 < arr2.length) {
    if (arr1[arridx1] < arr2[arridx2]) {
      result.push(arr1[arridx1++]);
    } else {
      result.push(arr2[arridx2++]);
    }
  }
  if (arridx1 < arr1.length) {
    for (let i = arridx1; i < arr1.length; i++) {
      result.push(arr1[i]);
    }
  }
  if (arridx2 < arr2.length) {
    for (let i = arridx2; i < arr2.length; i++) {
      result.push(arr2[i]);
    }
  }
  return result;
}

const answer = solution(arr1, arr2);
console.log(answer);
