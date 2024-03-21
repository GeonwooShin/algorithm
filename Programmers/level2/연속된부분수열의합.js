function solution(sequence, k) {
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  const result = [];

  while (right < sequence.length) {
    if (sum < k) {
      sum += sequence[++right];
    } else if (sum > k) {
      sum -= sequence[left++];
    } else {
      result.push([left, right]);
      sum += sequence[++right];
    }
  }

  return result.sort(condition)[0];
}

function condition(a, b) {
  const lenDiff = Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]);
  if (lenDiff !== 0) return lenDiff;
  return a[0] - b[0];
}

console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));

// 비내림차순 수열 주어짐
// 기존 수열에서 임의의 두 인덱스 원소와 그 사이의 원소를 모두 포함하는 부분 수열이어야 함
// 부분수열의 합은 k
// 합이 k인 부분 수열이 여러개면 길이가 짧은 수열
// 길이가 짧은 수열이 여러개면 앞쪽 수열
