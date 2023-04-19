function solution(num) {
  let answer = num;
  // let tmp;
  for (let i = 0; i < num.length; i++) {
    let idx = i;
    for (let j = i + 1; j < num.length; j++) {
      if (num[j] < num[idx]) idx = j;
    }
    [num[i], num[idx]] = [num[idx], num[i]];
    // tmp = num[i];
    // num[i] = num[idx];
    // num[idx] = tmp;
  }
  return answer;
}

const num = [13, 5, 11, 7, 23, 15];
console.log(solution(num));
