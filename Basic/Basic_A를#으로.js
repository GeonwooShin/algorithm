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

function solution2(word) {
  let answer;
  answer = word.replace(/A/g, "#");
  return answer;
}

let word = "BANANA";
console.log(solution(word));
console.log(solution2(word));
