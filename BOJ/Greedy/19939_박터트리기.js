const input = "34 2";
let [ballNum, basketNum] = input.toString().trim().split(" ").map(Number);

let sum = 0;
for (let i = 1; i <= basketNum; i++) {
  sum += i;
}
if (sum > ballNum) console.log(-1);
else {
  ballNum -= sum;
  if (ballNum % basketNum === 0) console.log(basketNum - 1);
  else console.log(ballNum);
}
