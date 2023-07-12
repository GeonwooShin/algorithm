const fs = require("fs");
const [gamePlayed, gameWin] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

function rate(played, win) {
  return Math.floor((100 * win) / played);
}

function solution(gamePlayed, gameWin) {
  let answer = Infinity;
  let lt = 0;
  let rt = 1000000000;
  const originRate = rate(gamePlayed, gameWin);
  if (originRate === 100 || originRate === 99) return -1;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    let newRate = rate(gamePlayed + mid, gameWin + mid);
    if (newRate <= originRate) {
      lt = mid + 1;
    } else if (newRate > originRate) {
      answer = Math.min(answer, mid);
      rt = mid - 1;
    }
  }
  return answer;
}

const answer = solution(gamePlayed, gameWin);
console.log(answer);
