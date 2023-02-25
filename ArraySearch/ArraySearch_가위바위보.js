function solution(round, aArr, bArr) {
  for (let i = 0; i < round; i++) {
    if (aArr[i] === bArr[i]) {
      console.log("D");
    } else if (aArr[i] === 1 && bArr[i] === 3) {
      console.log("A");
    } else if (aArr[i] === 2 && bArr[i] === 1) {
      console.log("A");
    } else if (aArr[i] === 3 && bArr[i] === 2) {
      console.log("A");
    } else {
      console.log("B");
    }
  }
}

let round = 5;
let aArr = [2, 3, 3, 1, 3];
let bArr = [1, 1, 2, 2, 3];
solution(round, aArr, bArr);
