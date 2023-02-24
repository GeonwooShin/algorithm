function solution(num) {
  let answer = [];
  let a = [0, ...num];
  for (let i = 0; i <= num.length; i++) {
    if (a[i] < a[i + 1]) {
      answer.push(a[i + 1]);
    }
  }
  answer.forEach((i) => console.log(i));
}

let num = [7, 3, 9, 5, 6, 12];
solution(num);
