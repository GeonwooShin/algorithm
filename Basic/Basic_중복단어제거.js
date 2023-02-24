function solution(words) {
  let answer = [];
  words.forEach((word) => {
    if (!answer.includes(word)) {
      answer.push(word);
    }
  });
  answer.forEach((i) => console.log(i));
}

let words = ["good", "time", "good", "time", "student"];
solution(words);
