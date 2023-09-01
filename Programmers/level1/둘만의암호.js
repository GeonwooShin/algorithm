function solution(s, skip, index) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const arr = [];
    let idx = char.charCodeAt();
    while (arr.length !== index) {
      if (idx >= 122) idx = (idx % 122) + 96;
      const str = String.fromCharCode(idx + 1);
      if (!skip.includes(str)) {
        arr.push(str);
      }
      idx++;
    }
    return arr;
  }
  return answer;
}
