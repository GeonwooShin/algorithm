function solution(str) {
  let answer = "";
  for (let x of str) {
    if (answer.indexOf(x) === -1) {
      answer += x;
    }
  }
  return answer;
}

let str = "ksekkset";
console.log(solution(str));
