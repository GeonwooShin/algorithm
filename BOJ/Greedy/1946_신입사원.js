const input =
  "2\n5\n3 2\n1 4\n4 1\n2 3\n5 5\n7\n3 6\n7 3\n4 2\n1 4\n5 7\n2 5\n6 1";
const [T, ...S] = input.toString().trim().split("\n");

for (let i = 0; i < T; i++) {
  let min = Number.MAX_SAFE_INTEGER;
  let cnt = 0;
  const N = S.shift();
  const judge = S.splice(0, N).map((v) => v.split(" ").map(Number));
  judge.sort((a, b) => a[0] - b[0]);
  judge.forEach((v) => {
    const [_, interview] = v;
    if (interview < min) {
      cnt++;
      min = interview;
    }
  });
  console.log(cnt);
}
