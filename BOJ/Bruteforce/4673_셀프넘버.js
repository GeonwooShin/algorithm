const isSelfNumber = (n) => {
  let num = n;
  while (n > 0) {
    num += n % 10;
    n = parseInt(n / 10);
  }
  return num;
};

function solution() {
  const arr = Array(10001).fill(true);
  arr.forEach((_, idx) => (arr[isSelfNumber(idx + 1)] = false));
  for (let i = 1; i < 10001; i++) {
    if (arr[i] === true) {
      console.log(i);
    }
  }
}

solution();
