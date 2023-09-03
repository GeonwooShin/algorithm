function solution(n) {
  let number_of_one = 0;
  let nToString = n.toString(2);
  for (let i = 0; i < nToString.length; i++) {
    if (nToString[i] === "1") number_of_one++;
  }
  let number = n;
  while (true) {
    number++;
    let num = 0;
    let a = number.toString(2);
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "1") num++;
    }
    if (num === number_of_one) {
      return number;
    }
  }
}

const n = 78;
console.log(solution(n));
