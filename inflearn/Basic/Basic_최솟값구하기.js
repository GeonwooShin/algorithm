function solution(arr) {
  let answer;
  arr.sort((a, b) => a - b);
  answer = arr;
  return answer;
}

let numArr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(numArr));
