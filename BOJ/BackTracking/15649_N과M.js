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
// const isVisited = Array.from({ length: N }, () => 0);
// function range(n) {
//   const results = [];
//   for (let i = 1; i < n; i++) {
//     results.push(i);
//   }
//   return results;
// }

// const characters = ["a", "b", "c", "a"]
// // permutations
// function permutations(selected) {
//   // 길이 M만큼 숫자를 다 나열했으면, return
//   // [1,5]
//   if (selected.length === N) {
//     return [selected]; // [[1,5]]
//   }

//   // 아직 안쓴 숫자들을 걸러낸다
//   const remaineds = range(N + 1).filter((num) => !selected.includes(num));
//   // 아직 안쓴 숫자들을 다음 숫자로 덧붙여가며 경우를 확인한다.
//   return remaineds.map((i) => permutations(selected.concat([i]))).flat();
//   return remaineds.flatMap((i) => permutations(selected.concat([i])));
//   return remaineds.flatMap((i) =>
//     selected.includes(num)
//     ? []
//     : permutations(selected.concat([i])));
// }

// const answer = permutations([]);
// console.log(answer);
// N = 5
// [1, ]로 시작하는 순열 + [2, ]로 시작하는 순열 ... [5, ]
