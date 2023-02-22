function solution(word) {
  let answer = "";
  for (let x of word) {
    if (x === "A") {
      answer += "#";
    } else {
      answer += x;
    }
  }
  return answer;
}

let word = "BANANA";
console.log(solution(word));
