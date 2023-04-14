function solution(required, schedule) {
  let answer = "YES";
  let queue = [...required];
  for (let x of schedule) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return "NO";
    }
  }
  if (queue.length > 0) return "NO";
  return answer;
}

const required = "CBA";
const schedule = "CADBGE";
console.log(solution(required, schedule));
