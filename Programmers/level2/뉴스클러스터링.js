function splitWords(str) {
  const obj = {};
  for (let i = 0; i < str.length - 1; i++) {
    const word = str.slice(i, i + 2);
    if (word.match(/[A-Z]{2}/)) {
      if (obj.hasOwnProperty(word)) obj[word] += 1;
      else obj[word] = 1;
    }
  }
  return obj;
}

function solution(str1, str2) {
  let answer = 0;
  let intersection = 0;
  let union = 0;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const str1Obj = splitWords(str1); // HA AN ND DS SH HA AK KE
  const str2Obj = splitWords(str2); // SH HA AK KE HA AN ND DS
  const set = new Set([...Object.keys(str1Obj), ...Object.keys(str2Obj)]);
  set.forEach((str) => {
    if (str1Obj[str] && str2Obj[str]) {
      union += Math.max(str1Obj[str], str2Obj[str]);
      intersection += Math.min(str1Obj[str], str2Obj[str]);
    } else {
      if (str1Obj[str]) union += str1Obj[str];
      else union += str2Obj[str];
    }
  });
  if (union === 0 && intersection === 0) return 65536;
  answer = Math.floor((intersection / union) * 65536);
  return answer;
}

const str1 = "handshake";
const str2 = "shake hands";
console.log(solution(str1, str2));
