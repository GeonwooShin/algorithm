// Q. 오늘 수업에 많은 학생들이 참여했습니다.
// 단 한 명의 학생을 제외하고는 모든 학생이 출석했습니다.
// 모든 학생의 이름이 담긴 배열과 출석한 학생들의 배열이 주어질 때, 출석하지 않은 학생의 이름을 반환하시오.

const all_students = [
  "나연",
  "정연",
  "모모",
  "사나",
  "지효",
  "미나",
  "다현",
  "채영",
  "쯔위",
];
const present_students = [
  "정연",
  "모모",
  "채영",
  "쯔위",
  "사나",
  "나연",
  "미나",
  "다현",
];

function solution(all, present) {
  const map = new Map();
  for (const student of all) {
    if (!map.get(student)) {
      map.set(student, 1);
    }
  }
  for (const student of present) {
    if (map.get(student)) {
      map.delete(student);
    }
  }
  return [...map.keys()];
}

const result = solution(all_students, present_students);
console.log(result);
