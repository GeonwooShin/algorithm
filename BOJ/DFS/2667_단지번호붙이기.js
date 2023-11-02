const input =
  "7\n0110100\n0110101\n1110101\n0000111\n0100000\n0111110\n0111000";
const [a, ...b] = input.split("\n");

const answer = [];
const n = Number(a);
const apartment = b.map((v) => v.split("").map(Number));
const isVisited = Array.from(Array(n), () => Array(n).fill(false));
let count = 0;
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function dfs(y, x) {
  if (apartment[y][x] === 1 && isVisited[y][x] === false) {
    isVisited[y][x] = true;
    count++;
    for (let i = 0; i < 4; i++) {
      const [newY, newX] = [y + dy[i], x + dx[i]];
      if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
        dfs(newY, newX);
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (apartment[i][j] === 1 && isVisited[i][j] === false) {
      dfs(i, j);
      answer.push(count);
      count = 0;
    }
  }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));
