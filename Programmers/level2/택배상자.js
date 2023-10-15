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

// 쌓아야하는 순서 4 3 1 2 5
// 컨테이너 벨트에 오는 순서 1 2 3 4 5

// 보조 컨테이너 벨트에 쌓는 순서 1 2
// 컨테이너 벨트에 남아있는 박스 5

// 4 - 3

// 보조 컨테이너 벨트에서 뺄 수 있는 것은 2와 컨테이너 벨트에서 뺄 수 있는 것은 5
// 하지만 빼야하는 것은 1이므로 쌓을 수 있는 상자는 두 개

// 쌓아야하는 순서 5 4 3 2 1
// 컨테이너 벨트에 오는 순서 1 2 3 4 5

// 보조 컨테이너 벨트에 쌓는 순서 1 2 3 4 5
// 컨테이너 벨트에 남아있는 박스

// 5 - 4 - 3 - 2 - 1

// 뺄 수 있는 상자는 5개

// function solution(order) {
//   let answer = 0;
//   const max = Math.max(...order);
//   const container = Array.from({ length: max }, (_, idx) => idx + 1);
//   const assistContainer = [];
//   for (let i = 0; i < order.length; i++) {
//     if (container.includes(order[i])) {
//       while (order[i] !== container[0]) {
//         assistContainer.push(container.shift());
//       }
//       if (container[0] === order[i]) {
//         container.shift();
//         answer++;
//       }
//     } else if (assistContainer.at(-1) === order[i]) {
//       assistContainer.pop();
//       answer++;
//     } else return answer;
//   }
//   return answer;
// }
