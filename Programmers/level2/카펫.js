function solution(brown, yellow) {
  const carpetSize = brown + yellow;

  for (let i = 3; i < carpetSize; i++) {
    const width = carpetSize / i;
    const height = i;
    if (width < height) continue;
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}

const brown = 10;
const yellow = 2;

console.log(solution(brown, yellow));
