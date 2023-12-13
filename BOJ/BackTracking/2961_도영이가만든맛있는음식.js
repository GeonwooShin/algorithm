const fs = "4\n1 7\n2 6\n3 8\n4 9";
const [a, ...b] = fs.toString().split("\n");

const ingrediantsNumber = Number(a);
const ingrediants = b.map((ingrediant) => ingrediant.split(" ").map(Number));
const visited = Array.from({ length: ingrediantsNumber }, () => false);
const result = [];
let answer = Number.MAX_SAFE_INTEGER;

function combination(depth, start) {
  if (depth >= 1) {
    let sour = 1;
    let bitter = 0;
    for (const i of result) {
      const [x, y] = ingrediants[i];
      sour *= x;
      bitter += y;
    }
    answer = Math.min(answer, Math.abs(sour - bitter));
  }
  for (let i = start; i < ingrediantsNumber; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i);
    combination(depth + 1, i + 1);
    visited[i] = false;
    result.pop();
  }
}

combination(0, 0);

console.log(answer);
