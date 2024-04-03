const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
let testCase = 1;
while (true) {
  const [n, m] = input[line].split(" ").map(Number);
  if (n === 0 && m === 0) break;
  const arr = new Array(n + 1);
  for (let i = 1; i <= n; i += 1) arr[i] = [];

  for (let i = 1; i <= m; i += 1) {
    const [x, y] = input[i + line].split(" ").map(Number);
    arr[x].push(y);
    arr[y].push(x);
  }
  const visited = new Array(n + 1).fill(false);
  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    if (!visited[i]) {
      if (!isCycle(i, 0, visited, arr)) count += 1;
    }
  }

  if (count > 1) {
    console.log(`Case ${testCase}: A forest of ${count} trees.`);
  } else if (count === 1) {
    console.log(`Case ${testCase}: There is one tree.`);
  } else {
    console.log(`Case ${testCase}: No trees.`);
  }
  line += m + 1;
  testCase += 1;
}

//사이클 판별
function isCycle(x, prev, visited, array) {
  //x는 현재 노드, 방문 처리
  visited[x] = true;
  for (const y of array[x]) {
    //x의 인접 노드
    if (!visited[y]) {
      //다음 노드를 방문한 적이 없다면
      //다음 노드 기준 사이클 판별
      if (isCycle(y, x, visited, array)) return true;
    } else if (y !== prev) return true; //방문한 적이 있고, 직전 노드가 아니라면 사이클
  }
  return false;
}
