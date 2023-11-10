const input = "3\n21 Junkyu\n21 Dohyun\n20 Sunyoung";
const [a, ...b] = input.toString().trim().split("\n");

const N = Number(a);
let answer = "";
const userArr = b.map((v, idx) => v.split(" "));
for (let i = 0; i < userArr.length; i++) {
  userArr[i].push(i);
}
userArr.sort((a, b) => {
  const ageA = Number(a[0]);
  const ageB = Number(b[0]);
  if (ageA !== ageB) return ageA - ageB;
  else return a[2] - b[2];
});

userArr.forEach((user) => {
  answer += user[0] + " " + user[1] + "\n";
});

console.log(answer);
