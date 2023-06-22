function solution(input) {
  let stack = [];
  for (let x of input) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  return stack.length ? "NO" : "YES";
}

const input = "((())";

console.log(solution(input));
