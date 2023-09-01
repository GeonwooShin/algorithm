function solution(new_id) {
  let id = new_id
    .toLowerCase()
    .replaceAll(/[^0-9a-z-_.]/g, "")
    .replaceAll(/\.{2,}/g, ".");
  if (id[0] === ".") id = id.slice(1);
  if (id[id.length - 1] === ".") id = id.slice(0, id.length - 1);
  if (id === "") id = "a";
  if (id.length >= 16) {
    id = id.slice(0, 15);
    if (id[14] === ".") id = id.slice(0, 14);
  }
  if (id.length <= 2) {
    const lastWord = id[id.length - 1];
    while (id.length <= 3) {
      id += lastWord;
    }
  }
  return id;
}

const new_id = ".ab......cd.";
console.log(solution(new_id));
