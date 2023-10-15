function solution(order) {
  let answer = 0;
  let container = 1;
  const subContainer = [];
  for (let box of order) {
    while (true) {
      if (box === subContainer.at(-1)) {
        subContainer.pop();
        answer++;
        break;
      } else {
        if (box < container) return answer;
        subContainer.push(container++);
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
