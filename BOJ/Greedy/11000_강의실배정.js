// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = "3\n1 3\n2 4\n3 5";
const input = str.toString().trim().split("\n");

const classNum = parseInt(input.shift());
let classArr = [];
let classRoom = 0;
let answer = 0;
for (let i = 0; i < classNum; i++) {
  let cls = input[i].split(" ").map((x) => parseInt(x));
  classArr.push({ time: cls[0], start: 1 });
  classArr.push({ time: cls[1], start: -1 });
}
classArr.sort((a, b) =>
  a.time === b.time ? a.start - b.start : a.time - b.time
);
classArr.forEach((schedule) => {
  if (schedule.start === -1) classRoom -= 1;
  else classRoom += 1;
  answer = classRoom > answer ? classRoom : answer;
});

console.log(answer);
