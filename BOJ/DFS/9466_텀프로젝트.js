const fs = "2\n7\n3 1 3 7 3 4 6\n8\n1 2 3 4 5 6 7 8";
const [a, ...b] = fs.split("\n");

const testNum = Number(a);

function dfs(x, graph, visited, finished, result) {
  visited[x] = true; // 현재 노드 방문 처리
  let y = graph[x]; // 다음 노드
  if (!visited[y]) {
    // 다음 노드를 아직 방문하지 않았다면
    dfs(y, graph, visited, finished, result);
  } else if (!finished[y]) {
    // 다음 노드를 방문했고, 완료되지 않았다면
    while (y !== x) {
      result.push(y);
      y = graph[y];
    }
    result.push(x);
  }
  finished[x] = true;
}

for (let i = 0; i < testNum; i++) {
  const [n, m] = b.splice(0, 2);
  const studentNum = Number(n);
  const graph = m.split(" ").map(Number);
  graph.unshift(0);
  const visited = new Array(studentNum + 1).fill(false);
  const finished = new Array(studentNum + 1).fill(false);
  const result = [];
  for (let x = 1; x <= studentNum; x++) {
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }
  console.log(n - result.length);
}
