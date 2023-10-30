function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const n = numbers.length;
  const ch = Array.from({ length: n }, () => 0);
  const set = new Set();
  function dfs(str) {
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        dfs(str + numbers[i]);
        ch[i] = 0;
      }
      if (str !== "") {
        if (isPrime(parseInt(str))) {
          set.add(parseInt(str));
        }
      }
    }
  }
  dfs("");
  return set.size;
}

console.log(solution("011"));
