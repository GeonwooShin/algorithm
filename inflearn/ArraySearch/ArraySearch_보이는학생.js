function solution(heightArr) {
  let answer = 1,
    max = heightArr[0];
  for (let i = 1; i < heightArr.length; i++) {
    if (heightArr[i] > max) {
      max = heightArr[i];
      answer++;
    }
  }
  return answer;
}

let heightArr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(heightArr));
