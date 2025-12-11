// Q.
// 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때,
// 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 함수를 완성하세요.
// prices = [1, 2, 3, 2, 3]
// answer = [4, 3, 1, 1, 0]

const prices = [1, 2, 3, 2, 3];

// 1
// 2 3 2 3

// 2
// 3 2 3

// 3
// 2 3

// 2
// 3

// 3
// 0

function solution(prices) {
  const result = Array.from({ length: prices.length }, () => 0);
  for (let i = 0; i < prices.length - 1; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        count++;
      } else {
        count++;
        break;
      }
    }
    result[i] = count;
  }
  return result;
}

const answer = solution(prices);
console.log(answer);
