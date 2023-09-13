function check(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[0] === ")" || s[0] === "}" || s[0] === "]") return 0;
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    else {
      if (s[i] === ")") {
        if (stack[stack.length - 1] === "(") stack.pop();
        else return 0;
      } else if (s[i] === "}") {
        if (stack[stack.length - 1] === "{") stack.pop();
        else return 0;
      } else if (s[i] === "]") {
        if (stack[stack.length - 1] === "[") stack.pop();
        else return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const front = s.slice(0, i);
    const back = s.slice(i);
    const changedWord = back + front;
    answer += check(changedWord);
  }
  return answer;
}

const s = "[](){}";
console.log(solution(s));
