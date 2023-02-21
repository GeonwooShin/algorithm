function solution(day, carArr) {
  let answer;
  answer = carArr.filter((car) => car % 10 === day).length;
  return answer;
}

let carNum = [1212, 3020, 4254, 1230, 6487, 2391, 6530];
console.log(solution(0, carNum));
