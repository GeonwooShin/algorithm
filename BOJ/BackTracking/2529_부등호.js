const fs = "2\n< >";
const input = fs.toString().split("\n");

const k = Number(input[0]);
const sign = input[1].split(" ");
const visited = Array.from({ length: sign.length }, () => false);
const result = [];
const answer = [];

function DFS(depth) {
  if (depth === k + 1) {
    for (let i = 0; i < k; i++) {
      if (sign[i] === "<") {
        if (result[i] > result[i + 1]) return;
      } else if (sign[i] === ">") {
        if (result[i] < result[i + 1]) return;
      }
    }
    answer.push(result.join(""));
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i);
    DFS(depth + 1);
    result.pop();
    visited[i] = false;
  }
}

DFS(0);
console.log(
  String(Math.max(...answer)) +
    "\n" +
    String(Math.min(...answer)).padStart(k + 1, "0")
);
