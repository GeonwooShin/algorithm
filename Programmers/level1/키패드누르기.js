function calc(center, left, right, preferHand) {
  const fromLeft =
    Math.abs(center[0] - left[0]) + Math.abs(center[1] - left[1]);
  const fromRight =
    Math.abs(center[0] - right[0]) + Math.abs(center[1] - right[1]);
  if (fromLeft > fromRight) {
    return "R";
  }
  if (fromLeft < fromRight) {
    return "L";
  }
  if (fromLeft === fromRight) {
    return preferHand === "right" ? "R" : "L";
  }
}

function solution(numbers, hand) {
  let answer = "";
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let leftHand = keypad["*"];
  let rightHand = keypad["#"];
  for (let number of numbers) {
    if (number === 1 || number === 4 || number === 7) {
      answer += "L";
      leftHand = keypad[number];
    } else if (number === 3 || number === 6 || number === 9) {
      answer += "R";
      rightHand = keypad[number];
    } else {
      if (calc(keypad[number], leftHand, rightHand, hand) === "R") {
        answer += "R";
        rightHand = keypad[number];
      } else {
        answer += "L";
        leftHand = keypad[number];
      }
    }
  }
  return answer;
}
