function solution(fees, records) {
  const [defaultTime, defaultPrice, extraPerTime, extraPerPrice] = fees;
  const obj = {};
  let answer = [];
  records.forEach((record) => {
    const [time, carNumber, enterOrExit] = record.split(" ");
    const [hour, minutes] = time.split(":").map(Number);
    if (!obj.hasOwnProperty(carNumber)) {
      obj[carNumber] = 0;
    }
    if (enterOrExit === "IN") {
      obj[carNumber] += hour * 60 + minutes;
    } else {
      obj[carNumber] -= hour * 60 + minutes;
    }
  });
  Object.keys(obj)
    .sort((a, b) => a - b)
    .forEach((carNum) => {
      if (obj[carNum] >= 0) obj[carNum] -= 23 * 60 + 59;
      const totalParkingTime = Math.abs(obj[carNum]);
      if (totalParkingTime <= defaultTime) answer.push(defaultPrice);
      else {
        if ((totalParkingTime - defaultTime) % extraPerTime !== 0) {
          const total =
            defaultPrice +
            Math.ceil((totalParkingTime - defaultTime) / extraPerTime) *
              extraPerPrice;
          answer.push(total);
        } else {
          const total =
            defaultPrice +
            ((totalParkingTime - defaultTime) / extraPerTime) * extraPerPrice;
          answer.push(total);
        }
      }
    });
  return answer;
}

const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];
console.log(solution(fees, records));
