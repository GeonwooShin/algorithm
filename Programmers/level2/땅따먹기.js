function solution(land) {
  let max = 0; //최대값
  let idx = 0; //최대값의 인덱스

  for (let i = 1; i < land.length; i++) {
    max = Math.max(...land[i - 1]);
    idx = land[i - 1].indexOf(max);
    land[i - 1][idx] = 0; //최대값을 0으로 재할당 => 동일한 인덱스일 때 2번째 최대값으로 처리
    land[i] = land[i].map(
      (v, j) => (v += j == idx ? Math.max(...land[i - 1]) : max)
    );
  }

  return Math.max(...land[land.length - 1]);
}
