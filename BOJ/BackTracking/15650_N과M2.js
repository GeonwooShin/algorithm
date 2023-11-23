const input = "4 2";
const [N, M] = input.toString().trim().split(" ").map(Number);

const numbers = Array.from({ length: N }, (_, idx) => idx + 1);

const answer = [];

function combinations(selected, index) {
  if (selected.length === M) {
    answer.push(selected);
    return;
  }
  for (let i = index; i < N; i++) {
    combinations(selected.concat(numbers[i]), i + 1);
  }
}

combinations([], 0);
console.log(answer);

// const arr = Array.from({ length: N }, (_, idx) => idx + 1);
// const isVisited = Array.from({ length: N }, () => 0);
// const selected = [];
// let answer = "";

// function DFS(arr, depth, start) {
//   if (depth === M) {
//     answer += selected.join(" ") + "\n";
//     return;
//   }
//   for (let i = start; i <= N; i++) {
//     if (isVisited[i - 1]) continue;
//     selected.push(i);
//     isVisited[i - 1] = 1;
//     DFS(arr, depth + 1, i + 1);
//     selected.pop();
//     isVisited[i - 1] = 0;
//   }
// }

// DFS(arr, 0, 1);
// console.log(answer);
