function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (x === x.toUpperCase()) {
      answer += 1;
    }
  }
  return answer;
}

function solution2(str) {
  let answer = 0;
  for (let x of str) {
    let num = x.charCodeAt();
    if (num >= 65 && num < 90) {
      answer += 1;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution2(str));
