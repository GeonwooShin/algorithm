function solution(today, terms, privacies) {
  let answer = [];
  const thisday = Number(today.split(".").join(""));
  const obj = {};
  terms.forEach((term) => {
    const [type, period] = term.split(" ");
    obj[type] = Number(period);
  });
  privacies.forEach((privacy, idx) => {
    const [number, term] = privacy.split(" ");
    const [year, month, day] = number.split(".").map((v) => Number(v));
    let expirationDay = day - 1;
    let expirationMonth = month + obj[term];
    let expirationYear = year;
    if (expirationDay === 0) {
      expirationDay = 28;
      expirationMonth -= 1;
    }
    if (expirationMonth > 12) {
      if (expirationMonth % 12 === 0) {
        expirationYear += Math.floor(expirationMonth / 12) - 1;
        expirationMonth = 12;
      } else {
        expirationYear += Math.floor(expirationMonth / 12);
        expirationMonth = expirationMonth % 12;
      }
    }
    expirationDay = String(expirationDay).padStart(2, "0");
    expirationMonth = String(expirationMonth).padStart(2, "0");
    const expiration = Number(
      [expirationYear, expirationMonth, expirationDay].join("")
    );
    if (expiration < thisday) answer.push(idx + 1);
  });
  return answer;
}

const today = "2020.12.17";
const terms = ["A 18"];
const privacies = ["2010.01.01 A", "2019.12.17 A"];
console.log(solution(today, terms, privacies));
