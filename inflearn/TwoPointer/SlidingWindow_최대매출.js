function solution(record, k) {
  let answer = 0;
  let sum = (lt = 0);
  for (let rt = 0; rt < record.length; rt++) {
    let leng = rt - lt + 1;
    sum += record[rt];
    if (leng === k) {
      answer = Math.max(answer, sum);
      sum -= record[lt++];
    }
  }
  return answer;
}

function solution2(record, k) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) {
    sum += record[i];
  }
  answer = sum;
  for (let i = k; i < record.length; i++) {
    sum += record[i] - record[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

const record = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const k = 3;
console.log(solution(record, k));
console.log(solution2(record, k));
