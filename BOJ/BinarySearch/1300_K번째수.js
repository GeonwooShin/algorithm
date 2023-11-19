const fs = "3\n7";
const [N, k] = fs.toString().trim().split("\n").map(Number);

let start = 1;
let end = 10 ** 10;

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let i = 1; i <= N; i++) {
    total += Math.min(parseInt(mid / i), N);
  }
  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);
