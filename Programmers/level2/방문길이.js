function solution(dirs) {
  let answer = new Set();
  let position = [0, 0];
  const moves = {
    U: [0, 1],
    L: [-1, 0],
    R: [1, 0],
    D: [0, -1],
  };
  for (let i = 0; i < dirs.length; i++) {
    const key = dirs[i];
    const [x, y] = moves[key];
    const newPosX = position[0] + x;
    const newPosY = position[1] + y;
    if (newPosX > 5 || newPosX < -5 || newPosY > 5 || newPosY < -5) {
      continue;
    }
    answer.add("" + position[0] + position[1] + newPosX + newPosY);
    answer.add("" + newPosX + newPosY + position[0] + position[1]);

    position = [newPosX, newPosY];
  }
  return answer.size / 2;
}

const dirs = "UUUUDUDUDUUU";
console.log(solution(dirs));
