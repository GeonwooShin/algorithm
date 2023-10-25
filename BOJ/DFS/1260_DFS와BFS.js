const input = "11 4 2\n2 1\n2 3\n2 11\n2 5";
const [a, ...b] = input.toString().trim().split("\n");

const [N, M, V] = a.split(" ").map(Number);
const connection = b.map((v) => v.split(" ").map(Number));

const graph = Array.from(Array(N + 1), () => []);

const dfsIsVisited = Array.from(Array(N + 1), () => false);
dfsIsVisited[V] = true;
const dfsAnswer = [V];

const bfsIsVisited = Array.from(Array(N + 1), () => false);
bfsIsVisited[V] = true;
const bfsAnswer = [V];

for (let i of connection) {
  const [from, to] = i;
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((v) => v.sort((a, b) => a - b));

function dfs(order) {
  for (let i of graph[order]) {
    if (!dfsIsVisited[i]) {
      dfsIsVisited[i] = true;
      dfsAnswer.push(i);
      dfs(i);
    }
  }
}

function bfs(order) {
  const queue = [order];
  while (queue.length) {
    const node = queue.shift();
    for (let i of graph[node]) {
      if (!bfsIsVisited[i]) {
        bfsIsVisited[i] = true;
        bfsAnswer.push(i);
        queue.push(i);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsAnswer.join(" "));
console.log(bfsAnswer.join(" "));
