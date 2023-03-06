function solution(numArr) {
  let answer;
  let max = 0;
  for (let num of numArr) {
    let sum = 0;
    tmp = num;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = num;
    } else if (sum === max) {
      answer = Math.max(answer, num);
    }
  }
  return answer;
}

function solution2() {
  let answer;
  let max = 0;
  for (let num of numArr) {
    let sum = num
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);
    if (sum > max) {
      max = sum;
      answer = num;
    } else if (sum === max) {
      answer = Math.max(answer, num);
    }
  }
  return answer;
}

const numArr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(numArr));
console.log(solution2(numArr));
