const fs = "3 6\nHFDFFB\nAJHGDH\nDGAGEH";
const [a, ...board] = fs.toString().split("\n");

const [R, C] = a.split(" ").map(Number);
const distance = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];
const visited = new Set();
let maxDepth = 0;

function DFS(depth, y, x) {
  maxDepth = Math.max(maxDepth, depth);
  for (const move of distance) {
    const newY = y + move[1];
    const newX = x + move[0];
    if (
      newX >= 0 &&
      newX < C &&
      newY >= 0 &&
      newY < R &&
      !visited.has(board[newY][newX])
    ) {
      visited.add(board[newY][newX]);
      DFS(depth + 1, newY, newX);
      visited.delete(board[newY][newX]);
    }
  }
}

visited.add(board[0][0]);
DFS(1, 0, 0);

console.log(maxDepth);
