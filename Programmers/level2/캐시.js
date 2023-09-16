function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  if (cacheSize === 0) return cities.length * 5;
  cities.forEach((city) => {
    city = city.toLowerCase();
    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      answer += 1;
    } else {
      if (cache.length < cacheSize) {
        cache.push(city);
        answer += 5;
      } else {
        cache.shift();
        cache.push(city);
        answer += 5;
      }
    }
  });
  return answer;
}

const cacheSize = 5;
const cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
];

console.log(solution(cacheSize, cities));
