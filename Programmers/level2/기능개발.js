function solution(progresses, speeds) {
  let answer = [];
  const workDays = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );
  let max = workDays[0];
  let count = 1;
  // 7 3 9
  for (let j = 1; j < workDays.length; j++) {
    if (workDays[j] <= max) {
      count++;
    } else {
      max = workDays[j];
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

console.log(solution(progresses, speeds));
