const arr = [3, 2, 4, 1, 3];
const flags = [true, false, true, false, false];

function solution(arr, flag) {
  const answer = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        answer.push(arr[i]);
      }
    } else {
      answer.slice(0, answer.length + 1 - arr[i]);
    }
  }
  return answer;
}

solution(arr, flags);
