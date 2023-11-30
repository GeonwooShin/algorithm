const fs = "7 1 2 3 4 5 6 7\n8 1 2 3 5 8 13 21 34\n0";
const input = fs
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let answer = "";
function combination(array, selected, start) {
  if (selected.length === 6) {
    answer += selected.join(" ") + "\n";
    return;
  }
  for (let i = start; i < array.length; i++) {
    combination(array, selected.concat(array[i]), i + 1);
  }
}
for (let i = 0; i < input.length - 1; i++) {
  const [k, ...S] = input[i];
  combination(S, [], 0);
  answer += "\n";
}

console.log(answer);
