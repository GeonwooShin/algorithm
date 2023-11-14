const fs = "4\n100\n200\n12345\n1003";
const [a, ...b] = fs.toString().trim().split("\n");

const T = Number(a);
const datas = b.map(Number);
const fibo = [0, 1];

for (let i = 2; ; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
  if (fibo[i] > 1000000000) break;
}

for (let data of datas) {
  const result = [];
  let num = data;
  let idx = fibo.length - 1;
  while (num > 0) {
    if (fibo[idx] <= num) {
      num -= fibo[idx];
      result.push(fibo[idx]);
    }
    idx--;
  }
  console.log(result.reverse().join(" "));
}
