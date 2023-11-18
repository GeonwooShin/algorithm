const fs = "7\n15 11 4 8 5 2 4";
const [a, b] = fs.toString().trim().split("\n");

const soldierNum = Number(a);
const attackArr = b.split(" ").map(Number).reverse();

let d = [0];

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (let attack of attackArr) {
  if (d[d.length - 1] < attack) {
    d.push(attack);
  } else {
    let index = lowerBound(d, attack, 0, d.length);
    d[index] = attack;
  }
}

console.log(soldierNum - (d.length - 1));
