const fs = "6\n20 1 15 8 4 10";
const [a, b] = fs.toString().split("\n");

const N = Number(a);
const numbers = b.split(" ").map(Number);

const check = new Array(N).fill(false);
const newArr = [];
let max = 0;

function cal(arr) {
  let sum = 0;
  for (let i = 0; i < N - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
}

function DFS(depth) {
  for (let i = 0; i < N; i++) {
    if (depth === N) {
      max = Math.max(max, cal(newArr));
    }

    if (!check[i]) {
      check[i] = true;
      newArr.push(numbers[i]);
      DFS(depth + 1);
      check[i] = false;
      newArr.pop();
    }
  }
}

DFS(0);
console.log(max);
