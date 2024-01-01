function* binaries(length, prefix) {
  if (length === 0) {
    yield prefix;
  } else {
    yield* binaries(length - 1, prefix + "0");
    yield* binaries(length - 1, prefix + "1");
  }
}

for (const i of binaries(3, "")) {
  console.info(i);
}
