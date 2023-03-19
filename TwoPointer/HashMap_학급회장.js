function solution(alphabet) {
  let answer;
  let max = 0;
  let hash = new Map();
  for (let x of alphabet) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1);
    } else {
      hash.set(x, 1);
    }
  }
  for (let [key, val] of hash) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

const alphabet = "BACBACCACCBDEDEEADDBCABBCADDAABBEEBEEAAAAADDEB";
console.log(solution(alphabet));
