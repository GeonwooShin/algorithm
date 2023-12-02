const fs = "8";
const n = Number(fs.toString());

const queens = [];

function possible(x, y) {
  for (const [a, b] of queens) {
    if (a === x || b === y) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}

let count = 0;

function DFS(row) {
  if (row === n) count++;
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    DFS(row + 1);
    queens.pop();
  }
}

DFS(0);
console.log(count);
