const fs = "4\n2\n1\n2\n12\n1";
const input = fs.toString().split("\n");

const n = +input[0];
const k = +input[1];
const visited = Array(n).fill(false);
const arr = [];
const answer = new Set();

for (let i = 2; i <= n + 1; i++) arr.push(input[i].trim());

function dfs(num, cnt) {
  if (cnt === k) {
    answer.add(num);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    dfs(num + arr[i], cnt + 1);
    visited[i] = false;
  }
}

dfs("", 0);
console.log(answer.size);
