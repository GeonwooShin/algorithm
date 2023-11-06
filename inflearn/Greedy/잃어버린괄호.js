const input = "55-50+40";
const N = input.toString().trim().split("-");

let answer = [];
for (let i of N) {
  let num = 0;
  const plusArr = i.split("+");
  for (let j of plusArr) {
    num += Number(j);
  }
  answer.push(num);
}

console.log(answer.reduce((a, b) => a - b));
