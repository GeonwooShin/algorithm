const input = "4 2";
const [N, M] = input.toString().trim().split(" ").map(Number);

const numbers = Array.from({ length: N }, (_, idx) => idx + 1);
const isVisited = Array.from({ length: N }, () => 0);
const selected = [];
let answer = "";
function DFS(depth) {
  if (depth === M) {
    answer += selected.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= numbers.length; i++) {
    if (isVisited[i]) continue;
    selected.push(i);
    isVisited[i] = 1;
    DFS(depth + 1);
    selected.pop();
    isVisited[i] = 0;
  }
}
DFS(0);
console.log(answer);
