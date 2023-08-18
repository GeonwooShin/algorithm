function solution(n, lost, reserve) {
  let answer = n - lost.length;
  const realLost = [];
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      reserve = reserve.filter((v) => v !== lost[i]);
      answer += 1;
    } else {
      realLost.push(lost[i]);
    }
  }
  realLost.sort((a, b) => a - b);
  for (let i = 0; i < realLost.length; i++) {
    if (reserve.includes(realLost[i] - 1)) {
      answer += 1;
      reserve = reserve.filter((v) => v !== realLost[i] - 1);
    } else if (reserve.includes(realLost[i] + 1)) {
      answer += 1;
      reserve = reserve.filter((v) => v !== realLost[i] + 1);
    }
  }
  return answer;
}
