const fs = "4 2\n2 1 2\n4 3 2\n1 4 3\n1 2\n3 2";
const input = fs.toString().trim().split("\n");

let answer = "";
const [N, M] = input[0].split(" ").map(Number);
const a = [];
const b = [];
const graph = Array.from({ length: N + 1 }, () => []);
let visited;
for (let i = 1; i < N; i++) {
  a.push(input[i]);
}
for (let i = N; i < N + M; i++) {
  b.push(input[i]);
}
const tree = a.map((v) => v.split(" ").map(Number));
const nodes = b.map((v) => v.split(" ").map(Number));

for (let i = 0; i < tree.length; i++) {
  const [from, to, distance] = tree[i];
  graph[from].push([to, distance]);
  graph[to].push([from, distance]);
}

function DFS(start, end, sum) {
  visited[start] = true;
  if (start === end) {
    answer += String(sum) + "\n";
    return;
  }
  for (let i = 0; i < graph[start].length; i++) {
    const [via, num] = graph[start][i];
    if (!visited[via]) {
      DFS(via, end, sum + num);
    }
  }
}

for (const node of nodes) {
  visited = Array.from({ length: N + 1 }, () => false);
  const [start, end] = node;
  DFS(start, end, 0);
}

console.log(answer);
