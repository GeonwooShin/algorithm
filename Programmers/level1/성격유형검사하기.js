function solution(survey, choices) {
  let answer = "";
  const types = ["RT", "CF", "JM", "AN"];
  const personality = {};
  const points = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };
  types.forEach((type) => {
    type.split("").forEach((char) => {
      personality[char] = 0;
    });
  });
  for (let i = 0; i < survey.length; i++) {
    const disagree = survey[i][0];
    const agree = survey[i][1];
    if (choices[i] <= 3) personality[disagree] += points[choices[i]];
    else if (choices[i] >= 5) personality[agree] += points[choices[i]];
  }
  types.forEach(([a, b]) => {
    answer += personality[b] > personality[a] ? b : a;
  });
  return answer;
}

const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];
console.log(solution(survey, choices));
