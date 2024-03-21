function solution(n) {
  const answer = [];
  const directions = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];
  const array = Array.from({ length: n }, () => new Array(n).fill(0));

  let row = -1;
  let col = 0;

  let value = 1;
  let directionIdx = 0;

  for (let i = n; i > 0; i--) {
    const [dRow, dCol] = directions[directionIdx];
    for (let j = 0; j < i; j++) {
      row += dRow;
      col += dCol;
      array[row][col] = value;
      value++;
    }
    directionIdx = (directionIdx + 1) % 3;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[i][j]) answer.push(array[i][j]);
    }
  }
  return answer;
}

console.log(solution(13));
