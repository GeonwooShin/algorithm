// function solution(n, left, right) {
//   const arr = Array.from({ length: n }, () => Array(n).fill(0));
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[0].length; j++) {
//       const max = Math.max(i, j);
//       arr[i][j] = max + 1;
//     }
//   }
//   const result = arr.flat(Infinity);
//   return result.slice(left, right + 1);
// }

function solution(n, left, right) {
  return Array.from({ length: right - left + 1 }, (_, i) => {
    const place = i + left;
    return Math.max(place % n, Math.floor(place / n)) + 1;
  });
}

const n = 4;
const left = 7;
const right = 14;

console.log(solution(n, left, right));
