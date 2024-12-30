function findMissingNumbers(nums: number[]) {
  const n = Math.max(...nums);
  const result = Array.from({ length: n }, (_, i) => i + 1);

  for (const num of nums) {
    result[num - 1] = 0;
  }

  return result.filter(Boolean);
}
