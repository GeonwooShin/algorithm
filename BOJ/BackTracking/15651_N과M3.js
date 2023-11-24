const input = "4 2";
const [N, M] = input.toString().trim().split(" ").map(Number);

const numbers = Array.from({ length: N }, (_, idx) => idx + 1);
let answer = "";
function combination(selected) {
  if (selected.length === M) {
    answer += selected.join(" ") + "\n";
    return;
  }
  for (let i = 0; i < N; i++) {
    combination(selected.concat(numbers[i]));
  }
}

combination([]);
console.log(answer);
