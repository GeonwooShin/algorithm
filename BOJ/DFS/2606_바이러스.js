const input = "6\n5\n1 2\n2 5\n3 4\n4 6\n5 6";
// const fs = require("fs");
const [n, m, ...str] = input.split("\n");

const computerNumber = Number(n);
const computerPairs = Number(m);

const graph = Array.from(Array(computerNumber + 1), () => []);
const isVirus = Array.from(Array(computerNumber + 1), () => false);
let count = 0;

const networks = str.map((v) => v.split(" ").map(Number));

for (let network of networks) {
  const [from, to] = network;
  graph[from].push(to);
  graph[to].push(from);
}

function dfs(order) {
  for (let start of graph[order]) {
    if (!isVirus[start]) {
      isVirus[start] = true;
      count++;
      dfs(start);
    }
  }
}

dfs(1);

console.log(count);
