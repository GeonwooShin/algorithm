const fs = "4 2\n9 8 7 1";
const [a, b] = fs.toString().split("\n");

const [N, M] = a.split(" ").map(Number);
const numbers = b
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let answer = "";
const visited = Array.from({ length: N }, () => 0);

function DFS(selected) {
  if (selected.length === M) {
    answer += selected.join(" ") + "\n";
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      DFS(selected.concat(numbers[i]));
      visited[i] = 0;
    }
  }
}

DFS([]);
console.log(answer);
