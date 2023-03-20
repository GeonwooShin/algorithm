function solution(str1, str2) {
  let answer = "YES";
  let Hstr1 = new Map();
  for (let x of str1) {
    if (Hstr1.has(x)) Hstr1.set(x, Hstr1.get(x) + 1);
    else Hstr1.set(x, 1);
  }
  for (let x of str2) {
    if (!Hstr1.has(x) || Hstr1.get(x) === 0) return "NO";
    Hstr1.set(x, Hstr1.get(x) - 1);
  }
  return answer;
}

const str1 = "AbaAeCe";
const str2 = "baeeACA";
console.log(solution(str1, str2));
