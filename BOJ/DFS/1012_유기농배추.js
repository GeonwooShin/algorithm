const input =
  "2\n10 8 17\n0 0\n1 0\n1 1\n4 2\n4 3\n4 5\n2 4\n3 4\n7 4\n8 4\n9 4\n7 5\n8 5\n9 5\n7 6\n8 6\n9 6\n10 10 1\n5 5";

const [a, ...b] = input.toString().trim().split("\n");

const T = Number(a);
const distance = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let nextTestCase = 0;

for (let i = 0; i < T; i++) {
  const G = nextTestCase;
  let answer = 0;
  const [M, N, K] = b[G].split(" ").map(Number);
  const location = b
    .slice(G + 1, G + K + 1)
    .map((v) => v.split(" ").map(Number));
  const isVisited = new Set();
  const field = Array.from(Array(N), () => Array(M).fill(0));
  location.forEach(([x, y]) => {
    field[y][x] = 1;
  });
  function dfs(y, x) {
    if (
      x >= 0 &&
      x < M &&
      y >= 0 &&
      y < N &&
      field[y][x] === 1 &&
      !isVisited.has(`${x}-${y}`)
    ) {
      isVisited.add(`${x}-${y}`);
      for (const move of distance) {
        const [newY, newX] = [y + move[0], x + move[1]];
        dfs(newY, newX);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (field[i][j] === 1 && !isVisited.has(`${j}-${i}`)) {
        dfs(i, j);
        answer++;
      }
    }
  }
  nextTestCase += K + 1;
  console.log(answer);
}
