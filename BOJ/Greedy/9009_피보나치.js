const fs = "4\n100\n200\n12345\n1003";
const [a, ...b] = fs.toString().trim().split("\n");

const T = Number(a);
const data = b.map(Number);
const arr = [0, 1];
for (let i = 2; ; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
  if (arr[i] > 1000000000) break;
}

for (let i = 0; i < data.length; i++) {
  const result = [];
  let num = data[i];
  while (num !== 0) {
    const newArr = arr.filter((v) => v <= num);
    const bigNum = newArr[newArr.length - 1];
    num -= bigNum;
    result.push(bigNum);
  }
  console.log(result.reverse().join(" "));
}
