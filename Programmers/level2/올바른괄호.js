function solution(s) {
  const stack = [];
  if (s[0] === ")") return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) return false;
      else stack.pop();
    }
  }
  if (stack.length === 0) return true;
  else return false;
}

const s = "(())()(())";
console.log(solution(s));
