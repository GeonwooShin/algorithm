function solution(msg) {
  let answer = [];
  const obj = {};
  let count;
  for (let i = 65; i <= 90; i++) {
    count = i - 64;
    obj[String.fromCharCode(i)] = count;
  }
  const s = msg.split("").reduce((acc, cur) => {
    let nextWord = acc + cur;
    if (obj[nextWord] === undefined) {
      obj[nextWord] = ++count;
    } else {
      return acc + cur;
    }
    if (obj[acc] !== undefined) answer.push(obj[acc]);
    return cur;
  });
  answer.push(obj[s]);
  return answer;
}

const msg = "TOBEORNOTTOBEORTOBEORNOT";
console.log(solution(msg));
