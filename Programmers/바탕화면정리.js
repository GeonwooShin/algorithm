function solution(wallpaper) {
  let lux = Number.MAX_SAFE_INTEGER;
  let luy = Number.MAX_SAFE_INTEGER;
  let rdx = 0;
  let rdy = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    const line = wallpaper[i];
    if (line.includes("#")) {
      lux = Math.min(lux, i);
      rdx = Math.max(rdx, i);
    }
    for (let j = 0; j < line.length; j++) {
      if (line[j] === "#") {
        luy = Math.min(luy, j);
        rdy = Math.max(rdy, j);
      }
    }
  }
  return [lux, luy, rdx + 1, rdy + 1];
}

const wallpaper = [
  ".##...##.",
  "#..#.#..#",
  "#...#...#",
  ".#.....#.",
  "..#...#..",
  "...#.#...",
  "....#....",
];
console.log(solution(wallpaper));
