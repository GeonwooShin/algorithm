const fs = "4\n0 10 15 20\n5 0 9 10\n6 13 0 12\n8 8 9 0";
const [a, ...b] = fs.toString().split("\n");

const cityNum = Number(a);
const costArr = b.map((v) => v.split(" ").map(Number));
const visited = Array.from({ length: a }, () => 0);
let min = Number.MAX_SAFE_INTEGER;

function DFS(depth, start, cost) {
  if (depth === cityNum - 1 && costArr[start][0] !== 0) {
    min = Math.min(min, cost + costArr[start][0]);
    return;
  }
  for (let i = 0; i < cityNum; i++) {
    if (!visited[i] && costArr[start][i] !== 0) {
      visited[i] = 1;
      DFS(depth + 1, i, cost + costArr[start][i]);
      visited[i] = 0;
    }
  }
}

visited[0] = 1;
DFS(0, 0, 0);

console.log(min);
