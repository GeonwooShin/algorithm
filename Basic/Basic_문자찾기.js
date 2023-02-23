function solution(word, c) {
  let answer = 0;
  for (let x of word) {
    if (x === c) {
      answer += 1;
    }
  }
  return answer;
}

function solution2(word, c) {
  let answer = word.split(c).length - 1;
  return answer;
}

let word = "COMPUTERPROGRAMMING";
let c = "R";
console.log(solution(word, c));
console.log(solution2(word, c));
