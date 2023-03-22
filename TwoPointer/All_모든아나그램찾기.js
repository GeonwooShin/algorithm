function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(S, T) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of T) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = T.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(S[i])) sH.set(S[i], sH.get(S[i]) + 1);
    else sH.set(S[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < S.length; rt++) {
    if (sH.has(S[rt])) sH.set(S[rt], sH.get(S[rt]) + 1);
    else sH.set(S[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(S[lt], sH.get(S[lt]) - 1);
    if (sH.get(S[lt]) === 0) sH.delete(S[lt]);
    lt++;
  }
  return answer;
}

const S = "bacaAacba";
const T = "abc";
console.log(solution(S, T));
