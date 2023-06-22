function solution(str) {
  let answer = "";
  let num = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      num++;
    } else {
      if (num === 1) {
        answer += str[i];
      } else {
        answer += str[i] + num;
      }
      num = 1;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSEWWWWAASDDD";
console.log(solution(str));
