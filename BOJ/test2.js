function solution(n) {
  const map = Array.from({ length: n }, () => new Array(n).fill(0));
  let [row, col] = [-1, 0];
  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) row += 1; // 아래
      if (i % 3 === 1) col += 1; // 오른쪽
      if (i % 3 === 2) {
        // 좌상단
        row -= 1;
        col -= 1;
      }
      console.log(map);
      map[row][col] = num;
      num++;
    }
  }
  console.log(map);
}

const n = 5;
solution(n);
