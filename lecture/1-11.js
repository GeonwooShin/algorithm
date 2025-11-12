// Q. 정수를 입력 했을 때, 그 정수 이하의 소수를 모두 반환하시오.

// 소수는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다.

// # 20이 입력된다면, 아래와 같이 반환해야 합니다!
// [2, 3, 5, 7, 11, 13, 17, 19]

function solution(number) {
  const result = [];
  for (let i = 2; i <= number; i++) {
    if (isPrimeNumber(i)) result.push(i);
  }
  return result;
}

function isPrimeNumber(number) {
  // 소수는? 1보다 커야하고
  // 소수는 1과 자기 자신으로만 나누어질 수 있다
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

const answer = solution(44);

console.log(answer);
