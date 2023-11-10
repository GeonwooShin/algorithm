const input = "5\n2 4 -10 4 -9";
const [a, b] = input.toString().trim().split("\n");

const N = Number(a);
const coord = b.split(" ").map(Number);

let answer = "";

const uniqArr = [...new Set(coord)];
uniqArr.sort((a, b) => a - b);

const map = new Map();
for (let i = 0; i < uniqArr.length; i++) {
  map.set(uniqArr[i], i);
}

for (let i = 0; i < coord.length; i++) {
  answer += map.get(coord[i]) + " ";
}

console.log(answer.trim());
