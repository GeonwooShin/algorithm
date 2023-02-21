function solution(arr) {
  let answer,
    min,
    initialValue = 0;
  let oddNumArr = arr.filter((i) => i % 2 === 1);
  min = Math.min(...oddNumArr);
  answer = oddNumArr.reduce((acc, cur) => acc + cur, initialValue);
  console.log(answer);
  console.log(min);
}

const numArr = [12, 77, 38, 41, 53, 92, 85];
solution(numArr);
