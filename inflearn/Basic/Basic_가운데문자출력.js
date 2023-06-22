function solution(str) {
  let answer;
  if (str.length % 2 === 1) {
    let idx = Math.floor(str.length / 2);
    answer = str.charAt(idx);
  } else {
    let idx = str.length / 2;
    answer = str.charAt(idx - 1) + str.charAt(idx);
  }
  return answer;
}

function solution2(str) {
  let answer;
  if (str.length % 2 === 1) {
    let idx = Math.floor(str.length / 2);
    answer = str.substring(idx, idx + 1);
  } else {
    let idx = str.length / 2;
    answer = str.substring(idx - 1, idx + 1);
  }
  return answer;
}

let str = "algorithm";
console.log(solution(str));
console.log(solution2(str));
