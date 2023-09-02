function solution(s) {
  let removedZero = 0;
  let count = 0;
  while (s.length > 1) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "1") {
        str += "1";
      }
    }
    removedZero += s.length - str.length;
    s = str.length.toString(2);
    count++;
  }
  return [count, removedZero];
}

const s = "110010101001";
console.log(solution(s));
