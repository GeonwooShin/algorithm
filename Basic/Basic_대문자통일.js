function solution(str) {
  let answer = "";
  for (let x of str) {
    answer += x.toUpperCase();
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
