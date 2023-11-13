const fs = "5\n4 5 2 1 4";
const [a, b] = fs.toString().trim().split("\n");

const N = Number(a);
const H = b.split(" ").map(Number);
let result = 0;
let arrow = Array.from({ length: H.length }, () => 0);

for (let x of H) {
  if (arrow[x] > 0) {
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    arrow[x - 1] += 1;
    result += 1;
  }
}

console.log(result);
