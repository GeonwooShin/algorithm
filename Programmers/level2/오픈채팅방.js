function solution(record) {
  let arr = [];
  const obj = {};
  record.forEach((alert) => {
    const [behavior, ...id] = alert.split(" ");
    if (behavior === "Leave") {
      const uid = id;
      arr.push(`${uid}님이 나갔습니다.`);
    } else {
      const [uid, nickname] = id;
      if (behavior === "Enter") {
        obj[uid] = nickname;
        arr.push(`${uid}님이 들어왔습니다.`);
      } else {
        obj[uid] = nickname;
      }
    }
  });
  const answer = arr.map((message) => {
    const uid = message.split("님이")[0];
    const nickname = obj[uid];
    const enterOrExit = message.split(" ")[1];
    return nickname + "님이 " + enterOrExit;
  });
  return answer;
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
console.log(solution(record));
