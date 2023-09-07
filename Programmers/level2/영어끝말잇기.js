function solution(n, words) {
  let answer = [0, 0];
  const dict = {};
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      dict[words[i]] = 1;
    } else {
      if (
        !dict.hasOwnProperty(words[i]) &&
        words[i - 1][words[i - 1].length - 1] === words[i][0] &&
        words[i].length >= 2
      ) {
        dict[words[i]] = 1;
      } else {
        const userNum = (i % n) + 1;
        const userTurn = Math.floor(i / n) + 1;
        answer = [userNum, userTurn];
        return answer;
      }
    }
  }
  return answer;
}

const n = 4;
const words = ["hello", "one", "even", "even", "now", "draw"];

console.log(solution(n, words));
