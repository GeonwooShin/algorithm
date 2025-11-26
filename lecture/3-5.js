// 분할 정복
// 1. 배열을 절반으로 계속 쪼갠다 (Divide)
// 2. 쪼개진 아주 작은 배열(길이 1)부터 두 개씩 병합한다 (Conquer = Merge)
// 3. 병합 결과들을 또 병합한다 (Combine)

// 부분 배열이 정렬된 상태여야 병합 가능
// // 시간복잡도가 매우 안정적 항상 O(N log N)

const arr = [5, 3, 2, 1, 6, 8, 7, 4];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const leftArray = mergeSort(array.slice(0, mid));
  const rightArray = mergeSort(array.slice(mid));
  return merge(leftArray, rightArray);
}

function merge(arr1, arr2) {
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

console.log(mergeSort(arr));
