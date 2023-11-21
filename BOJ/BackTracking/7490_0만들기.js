const fs = "7\n3\n7";
const input = fs.toString().split("\n");

const testCase = Number(input[0]);
let n = 0;
let arr = [];
for (let i = 1; i <= testCase; i++) {
  n = Number(input[i]);
  arr = [];
  for (let j = 1; j <= n; j++) arr.push(j);
  DFS([], 0);
  console.log();
}

function DFS(result, depth) {
  if (depth === n - 1) {
    let str = "";
    for (let k = 0; k < n - 1; k++) str += arr[k] + result[k];
    str += arr[n - 1] + "";
    const current = eval(str.split(" ").join(""));
    if (current === 0) console.log(str);
    return;
  }
  for (let x of [" ", "+", "-"]) {
    result.push(x);
    DFS(result, depth + 1);
    result.pop();
  }
}

// const fs = "7\n3\n7";
// const [a, ...b] = fs.toString().split("\n");

// const testCase = b.map(Number); // [3, 7]
// let numbers = [];

// for (let i = 0; i < testCase.length; i++) {
//   numbers = Array.from({ length: testCase[i] }, (_, idx) => idx + 1);
//   const result = [];
//   DFS(result, 0);
//   console.log();
// }

// function DFS(result, depth) {
//   if (depth === numbers.length - 1) {
//     let str = "";
//     for (let k = 0; k < numbers.length - 1; k++) str += numbers[k] + result[k];
//     str += numbers[numbers.length - 1] + "";
//     const current = eval(str.split(" ").join(""));
//     if (current === 0) console.log(str);
//     return;
//   }
//   for (let x of [" ", "+", "-"]) {
//     result.push(x);
//     DFS(result, depth + 1, numbers);
//     result.pop();
//   }
// }
