// 재귀함수
// 항상 탈출 조건을 고려해야함
// 특징: 문제의 범위를 조금씩 좁혀나감

// 1, 팩토리얼

// factorial(n) = n * factorial(n - 1)
// factorial(n - 1) = (n - 1) * factorial(n - 2)
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1);
// factorial(1) = 1 * factorail(0);

const answer = factorial(5);
console.log(answer);
