function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  const numberArr = numbers.split("");
  const set = new Set();

  function permutations(array, selected) {
    if (array.length >= 1) {
      for (let i = 0; i < array.length; i++) {
        const newFixed = selected + array[i];
        const temp = [...array];
        temp.splice(i, 1);
        if (isPrime(Number(newFixed))) set.add(newFixed);
        permutations(temp, newFixed);
      }
    }
  }

  permutations(numberArr, "");
  return set.size;
}

console.log(solution("17"));
