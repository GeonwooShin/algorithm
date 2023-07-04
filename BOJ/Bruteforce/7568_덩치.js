const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const person = Number(input.shift());
const personArr = [];
const grade = [];
for (let i = 0; i < person; i++) {
  personArr.push(input[i].split(" ").map((x) => Number(x)));
}
for (let i = 0; i < person; i++) {
  const user = personArr[i];
  let userGrade = 1;
  for (let j = 0; j < person; j++) {
    if (user[0] < personArr[j][0] && user[1] < personArr[j][1]) userGrade++;
  }
  grade.push(userGrade);
}
console.log(grade.join(" "));
