const fs = require("fs");
let sugar = Number(fs.readFileSync("/dev/stdin").toString().trim());

let cnt = 0;
while (true) {
  if (sugar % 5 === 0) {
    console.log(sugar / 5 + cnt);
    break;
  }
  if (sugar < 0) {
    console.log(-1);
    break;
  }
  sugar -= 3;
  cnt++;
}
