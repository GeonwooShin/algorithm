function solution(str, word) {
  let answer = [];
  let flag = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === word) {
      flag = 0;
      answer.push(flag);
    } else {
      flag++;
      answer.push(flag);
    }
  }
  flag = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === word) {
      flag = 0;
      answer[i] = flag;
    } else {
      flag++;
      answer[i] = Math.min(answer[i], flag);
    }
  }
  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
