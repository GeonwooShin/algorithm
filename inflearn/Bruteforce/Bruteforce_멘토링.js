function solution(gradeList) {
  let answer = 0;
  let m = gradeList.length;
  let n = gradeList[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0,
          pj = 0;
        for (let s = 0; s < n; s++) {
          if (gradeList[k][s] === i) pi = s;
          if (gradeList[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

const gradeList = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(gradeList));
