function solution(numbers) {
  const answer = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      answer.push(number + 1);
    } else {
      let bit = "0" + number.toString(2);
      const idx = bit.lastIndexOf("0");
      answer.push(parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2));
    }
  }
  return answer;
}

const numbers = [2, 7];
console.log(solution(numbers));
