const input = "4 2";
const [N, M] = input.toString().trim().split(" ").map(Number);

const numbers = Array.from({ length: N }, (_, idx) => idx + 1);
let answer = "";
function duplicateCombination(selected, start) {
  if (selected.length === M) {
    answer += selected.join(" ") + "\n";
    return;
  }
  for (let i = start; i < N; i++) {
    duplicateCombination(selected.concat(numbers[i]), i);
  }
}

duplicateCombination([], 0);
console.log(answer);
