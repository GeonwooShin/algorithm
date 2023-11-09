const input = "5\n3 4\n1 1\n1 -1\n2 2\n3 3";
const [a, ...b] = input.toString().trim().split("\n");

const num = Number(a);
const coordinate = b.map((v) => v.split(" ").map(Number));
let answer = "";
coordinate.sort((a, b) => {
  if (a[0] < b[0]) return -1;
  else if (a[0] > b[0]) return 1;
  else if (a[0] === b[0]) {
    if (a[1] < b[1]) return -1;
    else if (a[1] > b[1]) return 1;
    else return 0;
  }
});

coordinate.forEach((i) => {
  answer += i.join(" ") + "\n";
});

console.log(answer);
