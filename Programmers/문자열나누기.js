function solution(s) {
  let answer = 0;
  let hash = {};
  let x = s[0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === x) {
      if (hash.hasOwnProperty("firstLetter")) hash.firstLetter += 1;
      else hash.firstLetter = 1;
    } else if (s[i] !== x) {
      if (hash.hasOwnProperty("diff")) hash.diff += 1;
      else hash.diff = 1;
    }
    if (hash.firstLetter === hash.diff) {
      answer += 1;
      hash = {};
      x = s[i + 1];
    }
  }
  if (hash.hasOwnProperty("firstLetter") && hash.firstLetter !== 0) answer++;
  return answer;
}
