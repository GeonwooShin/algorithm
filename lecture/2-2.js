// 이진탐색
// 범위의 절반을 시도해보는 것
// 정렬이 되어있으면 이진탐색을 생각해볼 수 있음.

const target = 14;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const solution = (target, array) => {
  let min = 0;
  let max = array.length - 1;
  let guess = Math.floor((min + max) / 2);
  let count = 0;
  while (min <= max) {
    count++;
    if (array[guess] === target) {
      return true;
    } else if (array[guess] < target) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
    guess = Math.floor((min + max) / 2);
  }
  return false;
};

solution(target, numbers);
