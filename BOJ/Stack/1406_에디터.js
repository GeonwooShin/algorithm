// const fs = require('fs')
// const [str, N, ...command] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const cmdLen = Number(N)

const fs = "abcd\n3\nP x\nL\nP y";
const [str, N, ...command] = fs.toString().trim().split("\n");
const cmdLen = Number(N);

function solution(str, cmdLen, command) {
  let Lstack = [...str];
  let Rstack = [];
  for (let i = 0; i < cmdLen; i++) {
    const [key, word] = command[i].split(" ");
    switch (key) {
      case "P":
        Lstack.push(word);
        break;
      case "L":
        if (Lstack.length > 0) {
          Rstack.push(Lstack.pop());
        }
        break;
      case "D":
        if (Rstack.length > 0) {
          Lstack.push(Rstack.pop());
        }
        break;
      case "B":
        Lstack.pop();
        break;
    }
  }
  return Lstack.join("") + Rstack.reverse().join("");
}

const result = solution(str, cmdLen, command);
console.log(result);
