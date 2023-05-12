// 타임라인 대로 나열하기

function solution(arr) {
  let answer = 0;
  let timeline = [];
  for (let x of arr) {
    timeline.push([x[0], "s"]);
    timeline.push([x[1], "e"]);
  }
  timeline.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    // 아스키 코드 비교 (e가 s보다 먼저)
    else return a[0] - b[0];
  });
  let cnt = 0;
  for (let x of timeline) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

const arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
