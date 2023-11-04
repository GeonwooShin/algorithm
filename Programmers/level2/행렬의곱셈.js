function solution(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let elem = 0;
      for (let k = 0; k < arr2.length; k++) {
        // arr1[0].length도 가능.
        elem += arr1[i][k] * arr2[k][j];
      }
      result.push(elem);
    }
    newArr.push(result);
  }
  return newArr;
}

const arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];
const arr2 = [
  [3, 3],
  [3, 3],
];
console.log(solution(arr1, arr2));
