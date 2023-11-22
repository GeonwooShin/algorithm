const fs = "2\nGCF\nACDEB";
const [a, ...input] = fs.toString().trim().split("\n");

let answer = 0;
let current = 9;

const map = new Map();
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    const count = Math.pow(10, input[i].length - (j + 1));
    map.set(input[i][j], (map.get(input[i][j]) || 0) + count);
  }
}

const sortMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

for (let [_, alphabetValue] of sortMap) {
  answer += alphabetValue * current;
  current--;
}
console.log(answer);
