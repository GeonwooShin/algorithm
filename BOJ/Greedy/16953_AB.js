const input = "2 162";
let [A, B] = input.toString().trim().split(" ").map(Number);

let answer = 1;
let flag = false;

while (A <= B) {
  if (A === B) {
    flag = true;
    break;
  }
  if (B % 2 === 0) {
    B = parseInt(B / 2);
  } else if (B % 10 === 1) {
    B = parseInt(B / 10);
  } else {
    break;
  }
  answer++;
}

if (flag) console.log(answer);
else console.log(-1);
