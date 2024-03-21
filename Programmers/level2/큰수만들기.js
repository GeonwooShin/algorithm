function solution(number, k) {
  const stack = [];
  const numberArray = number.split("");
  for (const number of numberArray) {
    while (k > 0 && stack[stack.length - 1] < number) {
      stack.pop();
      k--;
    }
    stack.push(number);
  }
  stack.splice(stack.length - k, k);
  return stack.join("");
}

console.log(solution("4177252841", 4));
