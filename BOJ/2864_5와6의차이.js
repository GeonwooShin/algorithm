let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let num1 = input[0].split("");
let num2 = input[1].split("");
let result = [];

for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
  if (num1[i] === "6") num1[i] = "5";
  if (num2[i] === "6") num2[i] = "5";
}

result.push(Number(num1.join("")) + Number(num2.join("")));

for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
  if (num1[i] === "5") num1[i] = "6";
  if (num2[i] === "5") num2[i] = "6";
}

result.push(Number(num1.join("")) + Number(num2.join("")));

console.log(result.join(" "));
