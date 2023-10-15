function solution(order) {
  let answer = 0;
  let boxNumber = 1;
  const subContainer = [];
  for (let i = 0; i < order.length; i++) {
    let flag = true;
    while (flag) {
      if (order[i] === subContainer[subContainer.length - 1]) {
        flag = false;
        answer++;
        subContainer.pop();
      } else {
        if (order[i] < boxNumber) return answer;
        subContainer.push(boxNumber++);
      }
    }
  }
  return answer;
}

const order = [4, 3, 1, 2, 5];
console.log(solution(order));

// 런타임 에러

// function solution(order) {
//   let answer = 0;
//   const max = Math.max(...order);
//   const container = Array.from({ length: max }, (_, idx) => idx + 1);
//   const subContainer = [];
//   for (let i = 0; i < order.length; i++) {
//     if (container.includes(order[i])) {
//       while (order[i] !== container[0]) {
//         subContainer.push(container.shift());
//       }
//       if (container[0] === order[i]) {
//         container.shift();
//         answer++;
//       }
//     } else if (subContainer.at(-1) === order[i]) {
//       subContainer.pop();
//       answer++;
//     } else return answer;
//   }
//   return answer;
// }
