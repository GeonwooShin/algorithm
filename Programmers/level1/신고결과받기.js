function solution(id_list, report, k) {
  let answer = [];
  const reportObj = {};
  const reportedNumber = {};
  id_list.forEach((user) => {
    reportObj[user] = [];
    reportedNumber[user] = 0;
  });
  report.forEach((ele) => {
    const [reporter, reportedUser] = ele.split(" ");
    if (!reportObj[reporter].includes(reportedUser)) {
      reportObj[reporter].push(reportedUser);
    }
  });
  for (const i in reportObj) {
    const reportedUserArr = reportObj[i];
    for (let j = 0; j < reportedUserArr.length; j++) {
      reportedNumber[reportedUserArr[j]] += 1;
    }
  }
  id_list.forEach((user) => {
    let receivedEmail = 0;
    for (let i = 0; i < reportObj[user].length; i++) {
      if (reportedNumber[reportObj[user][i]] >= k) receivedEmail++;
    }
    answer.push(receivedEmail);
  });
  return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;
console.log(solution(id_list, report, k));
