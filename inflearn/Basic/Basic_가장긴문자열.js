function solution(strArr) {
  let answer = "";
  for (let str of strArr) {
    if (str.length > answer.length) {
      answer = str;
    }
  }
  return answer;
}

let strArr = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(strArr));
