function solution(nums) {
  let posNum = nums.length / 2;
  const arr = [...new Set(nums)];
  return arr.length >= posNum ? posNum : arr.length;
}
