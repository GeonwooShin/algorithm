const fs = "5 3\n0 0 1 0 0\n0 0 2 0 1\n0 1 2 0 0\n0 0 1 0 0\n0 0 0 0 2";
const input = fs.toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const chicken = [];
const house = [];
for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    if (line[j] === 1) house.push([i, j]);
    if (line[j] === 2) chicken.push([i, j]);
  }
}

const visited = new Array(chicken.length).fill(false);
const selected = [];
let answer = Number.MAX_SAFE_INTEGER;

function DFS(depth, start) {
  if (depth === M) {
    const result = [];
    for (const i of selected) result.push(chicken[i]);
    let sum = 0;
    for (const [hx, hy] of house) {
      let temp = Number.MAX_SAFE_INTEGER;
      for (const [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
      }
      sum += temp;
    }
    answer = Math.min(answer, sum);
    return;
  }
  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    DFS(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

DFS(0, 0);
console.log(answer);
