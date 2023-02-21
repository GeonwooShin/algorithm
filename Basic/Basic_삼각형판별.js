function solution(a, b, c) {
  let answer = "YES";
  let longest;
  let sum = a + b + c;
  if (a > b) {
    longest = a;
  } else {
    longest = b;
  }
  if (longest < c) {
    longest = c;
  }
  if (sum - longest <= longest) {
    answer = "NO";
  }
  return answer;
}

console.log(solution(3, 4, 5));
