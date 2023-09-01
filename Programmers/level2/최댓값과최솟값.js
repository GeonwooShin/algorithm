function solution(s) {
  let answer = "";
  const numbers = s.split(" ").map((v) => Number(v));
  let max_num = numbers[0];
  let min_num = numbers[0];
  numbers.forEach((number) => {
    if (number > max_num) max_num = number;
    if (number < min_num) min_num = number;
  });
  return `${min_num} ${max_num}`;
}

const s = "1 2 3 4";
console.log(solution(s));
