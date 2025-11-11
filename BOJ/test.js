function solution(quiz) {
  const answer = [];
  quiz.forEach((v) => {
    const arr = v.split(" ");
    const num1 = Number(arr[0]);
    const num2 = Number(arr[2]);
    if (arr[1] === "+") {
      const result = num1 + num2;
      if (result === Number(arr[4])) answer.push("O");
      else answer.push("X");
    } else {
      const result = num1 - num2;
      if (result === Number(arr[4])) answer.push("O");
      else answer.push("X");
    }
  });
  return answer;
}

const quiz = ["3 - 4 =  -3", "5 + 6 = 11"];
console.log(solution(quiz));
