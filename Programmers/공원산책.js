function solution(park, routes) {
  let dogPos;
  park.forEach((xPos, idx) => {
    for (let i = 0; i < xPos.length; i++) {
      if (xPos[i] === "S") {
        dogPos = [idx, i];
        break;
      }
    }
  });
  let maxCol = park.length - 1;
  let maxRow = park[0].length - 1;
  routes.forEach((route) => {
    const [direction, step] = route.split(" ");
    let tempCol = dogPos[0];
    let tempRow = dogPos[1];
    let flag = true;
    for (let i = 0; i < Number(step); i++) {
      if (direction === "E") tempRow++;
      else if (direction === "W") tempRow--;
      else if (direction === "S") tempCol++;
      else if (direction === "N") tempCol--;
      if (tempCol > maxCol || tempRow > maxRow || tempRow < 0 || tempCol < 0) {
        flag = false;
        break;
      }
      let curPos = park[tempCol][tempRow];
      if (curPos !== "O" && curPos !== "S") {
        flag = false;
        break;
      }
    }
    if (flag) {
      dogPos[0] = tempCol;
      dogPos[1] = tempRow;
    }
  });
  return dogPos;
}

const park = ["SOOO", "OOOO", "OOOO"];
const routes = ["E 3", "S 3", "S 2"];
console.log(solution(park, routes));
